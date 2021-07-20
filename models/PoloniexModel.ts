import axios from 'axios';

export default class PoloniexModel {
    private UPDATE_TIMEOUT = 5000;
    private POLONIEX_URL = 'https://poloniex.com/public?command=returnTicker';
    private quotesTimer: any;

    // data updated callbacks
    public setQuotes = (quotes: any) => {};
    public setHasError = (hasError: any) => {};

    public startQuotesTimer() {
        this.quotesTimer = setTimeout(() => this.onUpdateTimeout(), this.UPDATE_TIMEOUT);
    }

    public stopQuotesTimer() {
        if (this.quotesTimer) {
            clearTimeout(this.quotesTimer);
            this.quotesTimer = null;
        }
    }

    private async onUpdateTimeout() {
        try {
            const response = await axios.get(this.POLONIEX_URL);
            if (response && response.data) {
                this.onDataReceived(response.data);
            } else {
                this.setHasError(true);
            }
        } catch (error) {
            console.error(error);
            this.setHasError(true);
        }
    }

    private onDataReceived(data: any) {
        let quotes = [];
        const keys = Object.keys(data);
        for (let i = 0; i < keys.length; i++) {
            let quotation = data[keys[i]];
            quotes.push({
                name: keys[i],
                last: quotation.last,
                highestBid: quotation.highestBid,
                percentChange: quotation.percentChange
            });
        }
        // update values
        this.setHasError(false);
        this.setQuotes(quotes);
    }
}
