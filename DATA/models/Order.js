import moment from 'moment';

class Order {
    constructor(id, items, totalAmount, date, imgUrl) {
        this.id = id;
        this.items = items;
        this.totalAmount = totalAmount;
        this.date = date;
        this.imgUrl = imgUrl
    }

    get dateReader() {
        return moment(this.date).format('MMMM Do YYYY, hh:mm')
    }


}

export default Order;