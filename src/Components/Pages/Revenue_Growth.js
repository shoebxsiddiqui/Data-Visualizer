import React, { useState } from 'react'
import Chart from '../Chart';

export const Revenue_Growth = () => {
    const [Revenue_Growth] = useState([-27.63, 137.32,	40.02,	35.76,	15.33,	24.15,	17.45,	6.50,	27.73,	122.43]);

    return (
        <div>
            <Chart data={Revenue_Growth}/>
        </div>
  )
}

// Revenue
// Revenue_Growth
// Cost_of_Revenue
// Gross_Profit
// Selling_General_Admin
// Research_Development
// Operating_Expenses
// Operating_Income
// Other_Expense_Income
// Pretax_Income
// Income_Tax
// Net_Income
// Net_Income_Common
// Shares_Outstanding_Basic
// Shares_Outstanding_Diluted
// Shares_Change
// EPS_Basic
// EPS_Diluted
// Free_Cash_Flow_Per_Share
// Gross_Margin
// Operating_Margin
// Profit_Margin
// Free_Cash_Flow_Margin
// Effective_Tax_Rate
// EBITDA
// EBITDA_Margin
// Depreciation_Amortization
// EBIT
// EBIT_Margin