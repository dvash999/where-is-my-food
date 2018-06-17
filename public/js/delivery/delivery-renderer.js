/**
 * @class Responsible for rendering delivery-list in the HTML
 */
class DeliveryRenderer {
  constructor() {
    this.$deliveryList = $('.delivery-guys');
    this.$ordersList = $('.orders-list');
    this.$ordersToDeliverList = $('.orders-to-deliver');
    this.$deliveryTemplate = $('#delivery-template').html();
    this.$orderTemplate = $('#orders-template').html();
    this.$orderToDeliverTemplate = $('#readyToDeliverOrders-template').html();
  }

  renderDeliveryList(employees) {
    this.$deliveryList.empty();
    let template = Handlebars.compile(this.$deliveryTemplate);
    for (let i = 0; i < employees.length; i++) {
      let newHTML = template(employees[i]);
      console.log(newHTML);
      this.$deliveryList.append(newHTML);
    }
  }

  renderOrders(orders) {
    this.$ordersList.empty();
    let template = Handlebars.compile(this.$orderTemplate);
    for (let i = 0; i < orders.length; i++) {
      console.log(orders[i]);
      let newHTML = template(orders[i]);
      console.log(newHTML);
      this.$ordersList.append(newHTML);
    }
  }

  renderOrdersToDeliver(orders) {
    this.$ordersToDeliverList.empty();
    let template = Handlebars.compile(this.$orderToDeliverTemplate);
    for (let i = 0; i < orders.length; i++) {
      console.log(orders[i]);
      let newHTML = template(orders[i]);
      console.log(newHTML);
      this.$ordersToDeliverList.append(newHTML);
    }
  }
}

export default DeliveryRenderer;