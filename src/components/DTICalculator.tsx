import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, TrendingUp, AlertCircle, CheckCircle, Info } from 'lucide-react';

interface DebtItem {
  id: string;
  name: string;
  amount: number;
}

export default function DTICalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(0);
  const [debts, setDebts] = useState<DebtItem[]>([
    { id: '1', name: 'Mortgage/Rent', amount: 0 },
    { id: '2', name: 'Car Payment', amount: 0 },
    { id: '3', name: 'Credit Cards (min payments)', amount: 0 },
    { id: '4', name: 'Student Loans', amount: 0 },
    { id: '5', name: 'Other Loans', amount: 0 },
  ]);

  const totalDebt = useMemo(() => 
    debts.reduce((sum, debt) => sum + (debt.amount || 0), 0), 
    [debts]
  );

  const dtiRatio = useMemo(() => {
    if (monthlyIncome <= 0) return 0;
    return (totalDebt / monthlyIncome) * 100;
  }, [totalDebt, monthlyIncome]);

  const getDTIStatus = (ratio: number) => {
    if (ratio === 0) return { label: 'Enter your info', color: 'text-gray-400', bg: 'bg-gray-500/20', icon: Info };
    if (ratio < 36) return { label: 'Excellent', color: 'text-emerald-400', bg: 'bg-emerald-500/20', icon: CheckCircle };
    if (ratio < 43) return { label: 'Good', color: 'text-cyan', bg: 'bg-cyan/20', icon: TrendingUp };
    if (ratio < 50) return { label: 'Fair', color: 'text-gold', bg: 'bg-gold/20', icon: AlertCircle };
    return { label: 'Needs Work', color: 'text-red-400', bg: 'bg-red-500/20', icon: AlertCircle };
  };

  const status = getDTIStatus(dtiRatio);
  const StatusIcon = status.icon;

  const updateDebt = (id: string, amount: number) => {
    setDebts(debts.map(d => d.id === id ? { ...d, amount } : d));
  };

  const getFundingInsight = (ratio: number) => {
    if (ratio === 0) return '';
    if (ratio < 36) return 'You likely qualify for most business funding products including 0% APR credit cards, lines of credit, and term loans.';
    if (ratio < 43) return 'You have solid funding options. Focus on business credit cards and revenue-based lending. Some traditional products may be available.';
    if (ratio < 50) return 'Your options are more limited. Consider revenue-based lending or secured credit products while working to reduce existing debt.';
    return 'Credit repair and debt reduction should be your first priority. Once your DTI improves, more funding options will open up.';
  };

  return (
    <section id="dti-calculator" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-dark" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-cyan/10 border border-cyan/30 rounded-full px-4 py-1.5 mb-6">
            <Calculator size={16} className="text-cyan" />
            <span className="text-cyan text-sm font-medium">Free Tool</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-white mb-4">
            DTI Calculator
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Your debt-to-income ratio determines what funding you qualify for. 
            Calculate yours in 30 seconds.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 space-y-6"
          >
            {/* Monthly Income */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Monthly Gross Income
              </label>
              <div className="relative">
                <DollarSign size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  value={monthlyIncome || ''}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  placeholder="0"
                  className="w-full bg-navy-dark border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gray-500 focus:border-cyan focus:outline-none"
                />
              </div>
            </div>

            {/* Debts */}
            <div>
              <label className="block text-white text-sm font-medium mb-3">
                Monthly Debt Payments
              </label>
              <div className="space-y-3">
                {debts.map((debt) => (
                  <div key={debt.id} className="flex items-center gap-3">
                    <span className="text-text-muted text-sm w-40 flex-shrink-0">{debt.name}</span>
                    <div className="relative flex-1">
                      <DollarSign size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="number"
                        value={debt.amount || ''}
                        onChange={(e) => updateDebt(debt.id, Number(e.target.value))}
                        placeholder="0"
                        className="w-full bg-navy-dark border border-gray-700 rounded-lg pl-8 pr-3 py-2 text-white text-sm placeholder:text-gray-500 focus:border-cyan focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total */}
            <div className="pt-4 border-t border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-text-muted">Total Monthly Debt</span>
                <span className="text-white font-semibold text-lg">
                  ${totalDebt.toLocaleString()}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Result Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 flex flex-col"
          >
            {/* DTI Display */}
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className={`w-20 h-20 rounded-full ${status.bg} flex items-center justify-center mb-4`}>
                <StatusIcon size={40} className={status.color} />
              </div>
              <div className="text-5xl font-outfit font-bold text-white mb-2">
                {dtiRatio.toFixed(1)}%
              </div>
              <div className={`text-lg font-medium ${status.color} mb-4`}>
                {status.label}
              </div>
              <p className="text-text-muted text-sm max-w-xs">
                {getFundingInsight(dtiRatio)}
              </p>
            </div>

            {/* Scale */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="flex justify-between text-xs text-text-muted mb-2">
                <span>0%</span>
                <span>36%</span>
                <span>43%</span>
                <span>50%+</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden flex">
                <div className="w-1/4 bg-emerald-500" />
                <div className="w-1/4 bg-cyan" />
                <div className="w-1/4 bg-gold" />
                <div className="w-1/4 bg-red-500" />
              </div>
              <div className="flex justify-between text-xs mt-2">
                <span className="text-emerald-400">Excellent</span>
                <span className="text-cyan">Good</span>
                <span className="text-gold">Fair</span>
                <span className="text-red-400">Needs Work</span>
              </div>
            </div>

            {/* CTA */}
            {dtiRatio > 0 && (
              <motion.a
                href="#apply"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 block w-full text-center bg-cyan hover:bg-cyan/90 text-navy font-semibold py-3 rounded-lg transition-colors"
              >
                {dtiRatio < 50 ? 'See Your Funding Options' : 'Start Credit Repair'}
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
