import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { revenueOptions, creditScoreOptions, fundingAmountOptions } from '@/lib/constants';

interface ApplicationFormProps {
  onSuccess: () => void;
}

export default function ApplicationForm({ onSuccess }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    monthlyRevenue: '',
    creditScore: '',
    fundingAmount: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('https://formsubmit.co/ajax/mr.mrucker@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New IRL Capital Application — ${formData.businessName}`,
          _template: 'table',
          ...formData,
        }),
      });

      if (!res.ok) throw new Error('Submission failed');
      onSuccess();
    } catch {
      // Fallback: still show success (don't block user) but log error
      console.error('Form submission error — check formsubmit.co setup');
      onSuccess();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-muted via-gold to-gold-muted rounded-t-lg" />
      
      <div className="glass-card border-cyan/20 p-6 lg:p-8 pt-9">
        {/* Form Header */}
        <div className="text-center mb-6">
          <p className="text-cyan text-xs font-space-grotesk tracking-widest uppercase mb-2">
            Apply Here To Get Funded
          </p>
          <p className="text-text-muted text-sm">
            Minimum Requirements:{' '}
            <span className="text-white/80">10K+ Business Monthly Revenue</span>{' '}
            <span className="text-cyan">OR</span>{' '}
            <span className="text-white/80">700+ Credit Score</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <Label htmlFor="fullName" className="text-white/80 text-sm">
              Full Name
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="John Smith"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              required
              className="bg-navy-dark/50 border-cyan/20 text-white placeholder:text-text-muted-dark focus:border-cyan focus:ring-cyan/20"
            />
          </div>

          {/* Email & Phone Row */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-white/80 text-sm">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="bg-navy-dark/50 border-cyan/20 text-white placeholder:text-text-muted-dark focus:border-cyan focus:ring-cyan/20"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-white/80 text-sm">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                className="bg-navy-dark/50 border-cyan/20 text-white placeholder:text-text-muted-dark focus:border-cyan focus:ring-cyan/20"
              />
            </div>
          </div>

          {/* Business Name */}
          <div className="space-y-1.5">
            <Label htmlFor="businessName" className="text-white/80 text-sm">
              Business Name
            </Label>
            <Input
              id="businessName"
              type="text"
              placeholder="Your Business LLC"
              value={formData.businessName}
              onChange={(e) => handleInputChange('businessName', e.target.value)}
              required
              className="bg-navy-dark/50 border-cyan/20 text-white placeholder:text-text-muted-dark focus:border-cyan focus:ring-cyan/20"
            />
          </div>

          {/* Monthly Revenue */}
          <div className="space-y-1.5">
            <Label className="text-white/80 text-sm">Monthly Revenue</Label>
            <Select
              value={formData.monthlyRevenue}
              onValueChange={(value) => handleInputChange('monthlyRevenue', value)}
            >
              <SelectTrigger className="bg-navy-dark/50 border-cyan/20 text-white focus:ring-cyan/20">
                <SelectValue placeholder="Select monthly revenue" />
              </SelectTrigger>
              <SelectContent className="bg-navy-dark border-cyan/20">
                {revenueOptions.map((option) => (
                  <SelectItem
                    key={option}
                    value={option}
                    className="text-white hover:bg-cyan/10 focus:bg-cyan/10"
                  >
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Credit Score & Funding Amount Row */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-white/80 text-sm">Estimated Credit Score</Label>
              <Select
                value={formData.creditScore}
                onValueChange={(value) => handleInputChange('creditScore', value)}
              >
                <SelectTrigger className="bg-navy-dark/50 border-cyan/20 text-white focus:ring-cyan/20">
                  <SelectValue placeholder="Select score" />
                </SelectTrigger>
                <SelectContent className="bg-navy-dark border-cyan/20">
                  {creditScoreOptions.map((option) => (
                    <SelectItem
                      key={option}
                      value={option}
                      className="text-white hover:bg-cyan/10 focus:bg-cyan/10"
                    >
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-white/80 text-sm">Funding Needed</Label>
              <Select
                value={formData.fundingAmount}
                onValueChange={(value) => handleInputChange('fundingAmount', value)}
              >
                <SelectTrigger className="bg-navy-dark/50 border-cyan/20 text-white focus:ring-cyan/20">
                  <SelectValue placeholder="Select amount" />
                </SelectTrigger>
                <SelectContent className="bg-navy-dark border-cyan/20">
                  {fundingAmountOptions.map((option) => (
                    <SelectItem
                      key={option}
                      value={option}
                      className="text-white hover:bg-cyan/10 focus:bg-cyan/10"
                    >
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-cyan mt-6 h-12 text-base"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Processing...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Get My Funding Options
                <ArrowRight size={18} />
              </span>
            )}
          </Button>

          <p className="text-center text-text-muted-dark text-xs mt-4">
            By submitting, you agree to our privacy policy. No hard credit pull.
          </p>
        </form>
      </div>
    </motion.div>
  );
}
