import yfinance as yf
import pandas as pd

# List of SET 50 stocks (as an example; the full list should be obtained from a reliable source)
set50_stocks = [
    'AOT.BK', 'ADVANC.BK', 'AWC.BK', 'BBL.BK', 'BCP.BK','BDMS.BK', 'BEM.BK', 'BGRIM.BK', 'BH.BK',
    'BJC.BK',  'BTS.BK', 'CBG.BK', 'CENTEL.BK',  'CPALL.BK', 'CPF.BK', 'CPN.BK',
    'CRC.BK', 'DELTA.BK', 'EA.BK', 'EGCO.BK', 'GLOBAL.BK', 'GPSC.BK', 'GULF.BK', 'HMPRO.BK', 'INTUCH.BK',
    'ITC.BK', 'IVL.BK', 'KBANK.BK', 'KTB.BK', 'KTC.BK', 'LH.BK', 'MINT.BK', 'MTC.BK','OR.BK','OSP.BK', 'PTT.BK',
    'PTTEP.BK', 'PTTGC.BK', 'RATCH.BK', 'SCB.BK','SCGP.BK', 'SCC.BK', 'TIDLOR.BK', 'TISCO.BK','TLI.BK',
    'TOP.BK', 'TRUE.BK', 'TTB.BK', 'TU.BK','WHA.BK'
]

# Function to fetch financial data
def fetch_financial_data(ticker):
    stock = yf.Ticker(ticker)
    info = stock.info
    
    roe = info.get('returnOnEquity', None)
    pe_ratio = info.get('trailingPE', None)
    de_ratio = info.get('debtToEquity', None)
    market_cap = info.get('marketCap', None)
    price_momentum_6m = info.get('52WeekChange', None)  # Using 52 week change as a proxy for 6-month momentum
    revenue_growth = info.get('revenueGrowth', None)
    current_price = info.get('currentPrice', None)
    
    return {
        'Ticker': ticker,
        'ROE': roe,
       'P/E Ratio': pe_ratio,
        'D/E Ratio': de_ratio,
        'Market Cap': market_cap,
        'Price Momentum 6M': price_momentum_6m,
        'Revenue Growth': revenue_growth,
        'Current Price': current_price
    }

# Fetching data for all SET 50 stocks
financial_data = []
for stock in set50_stocks:
    data = fetch_financial_data(stock)
    financial_data.append(data)

# Creating a DataFrame
financial_df = pd.DataFrame(financial_data)

# Save to CSV
financial_df.to_csv('financial_data.csv', index=False)
print("Data saved to financial_data.csv")

