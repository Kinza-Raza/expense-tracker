import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div className="inc-exp-cont">
            <table>
                <tbody>
                <tr>
                    <th>Income</th>
                    <th>Expense</th>
                </tr>

                <tr>
                <td className="inc" id="inc" style={{color:"green"}}><strong>+0.00 PKR</strong></td>
                <td className="exp" id="exp" style={{color:"red"}}><strong>-0.00 PKR</strong></td>

                </tr>
                </tbody>
            </table>
        </div>
    )
}
