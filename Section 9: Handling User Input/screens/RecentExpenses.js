import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../utils/date';

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  // Expenses that occured in the last 7 days seen from today
  const recentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Las 7 days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
