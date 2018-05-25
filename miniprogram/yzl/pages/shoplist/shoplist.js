var config = require('../../config.js');

var appInstance = getApp()

Page({
  data: {
    tabs: [

    ],
    productList: [],
    cartShow: true,
		cartMin: 0,
		cartMax: 99999,
		cartOrigin: 1,
		cartList: []
  },
  onLoad() {
    setTimeout(this.getTab, 100)
    setTimeout(this.mockProduct, 100)
		this.mockCartList()
  },
  getTab() {
    var tlist = [
      {title: '洗衣'},
      {title: '洗鞋'},
      {title: '洗家纺'},
      {title: '洗窗帘'},
    ]
    console.log(tlist);
    this.setData({
      tabs: tlist,
    }, function () {})
  },
  mockProduct() {
    var ptli = []
    for(var i = 0; i < 1; i++) {
      var pt = {
        'id' : i,
        'image': 'http://140.143.8.19/code-repo/PHP/lixshop/backend/web/uploads/temp/78145dcf5ea44b0b89afc2f3392445a3.jpg',
        'title': '衬衫哦哦哦',
        'price': '16.00',
        'badge': 0
      }
      ptli.push(pt)
    }
    this.setData({
      productList: ptli
    }, function () {})
  },
	mockCartList() {
	  var pt = {
	  	'id' : 0,
	  	'image': 'http://140.143.8.19/code-repo/PHP/lixshop/backend/web/uploads/temp/78145dcf5ea44b0b89afc2f3392445a3.jpg',
	  	'title': '衬衫哦哦哦',
	  	'price': '16.00',
	  	'badge': 0
	  }
		var cartli = []
		cartli.push(pt)
		console.log(cartli)
		this.setData({
			cartList: cartli
		}, function () {})
	},
	/**
	 * 商品列表的点击事件，增加badeg数量 并且加入购物车
	 */
  addBadge: function (event) {
    var item = event.currentTarget.dataset.item
		console.log(item)
		this.addCartItem(item)
    var targetItem = "productList[" + item.id + "]"
    item.badge += 1
    var that = this
    that.setData({
      [targetItem]: item
    }, function () {})
  },
	addCartItem: function (item) {
		var that = this
		var list = that.data.cartList	
		console.log(list)
		const exist = this.isInCartList(item)
		console.log(exist)
		// 判断已经添加过商品
		if (exist) {
			// 产品badge +1
		} else {
			// 添加产品进入list
		}

		// 刷新cartlist
	},
	isInCartList(item) {
		var that = this;
		for (var i=0; i<that.data.cartList.length; i++) {
			if (item.id === that.data.cartList[i].id) {
				return true
			}
		}
		return false
	},
  onClick: function(e) {
    console.log(`ComponentId:${e.detail.componentId},you selected:${e.detail.key}`);
  },
  showPopup (e) {
    console.log(e)
    let cartState = e.target.dataset.cartshow
    this.setData({
      cartShow: !cartState
    }, function () {})
  },
  onChangeNumber (e) {
    console.log(e.detail);
  },
})
