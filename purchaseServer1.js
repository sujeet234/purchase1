let express=require("express");
let cors = require("cors");
let app = express();
app.use(express.json());
app.use(cors());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET,POST,OPTIONS,PUT,PATCH,DELETE,HEAD"
    );
    res.header(
        "Access-Control-Allow-Header",
        "Origin, X-Requested-With,Content-Type,Accept"
    );
    next();
});
//process.env.PORT ||
const port =  2410;
app.listen(port,()=>console.log(`Listening on port ${port}`));

let datas = {
    shops: [
      { shopId: 1, name: "Sector 25 Gurgaon", rent: 28500 },
      { shopId: 2, name: "Sector 53 Gurgaon", rent: 37400 },
      { shopId: 3, name: "Greater Kailash Delhi", rent: 63100 },
      { shopId: 4, name: "Mall of India Noida", rent: 54200 },
    ],
    products: [
      {productId: 1,productName: "Pepsi Can",category: "Soft Drinks",description:"300ml"},
      {productId: 2,productName: "Pepsi PET",category: "Soft Drinks",description: "500ml"},
      {productId: 3,productName: "Diet Coke",category: "Soft Drinks",description: "300ml Can"},
      {productId: 4,productName: "Mazaa",category: "Soft Drinks",description: "500ml bottle"},
      {productId: 5,productName: "Dairy Milk",category: "Chocolate",description: "25 g",},
      {productId: 6,productName: "Fruit & Nut",category: "Chocolate",description: "60 g",},
      {productId: 7,productName: "Silk - Crackles",category: "Chocolate",description: "100g"},
      {productId: 8,productName: "Perk",category: "Chocolate",description: "40 g"},
    ],
    purchases: [
      {  purchaseId: 1,  shopId: 1,  productid: 1,  quantity: 10,  price: 25,},
      {  purchaseId: 2,  shopId: 1,  productid: 2,  quantity: 15,  price: 32,},
      {  purchaseId: 3,  shopId: 1,  productid: 3,  quantity: 5,  price: 27,},
      {  purchaseId: 4,  shopId: 1,  productid: 4,  quantity: 20,  price: 31  },
      {  purchaseId: 5,  shopId: 2,  productid: 5,  quantity: 10,  price: 8,},
      {  purchaseId: 6,  shopId: 2,  productid: 5,  quantity: 15,  price: 8,},
      {  purchaseId: 7,  shopId: 2,  productid: 5,  quantity: 10,  price: 8,},
      {  purchaseId: 8,  shopId: 2,  productid: 5,  quantity: 5,  price: 8,},
      {  purchaseId: 9,  shopId: 2,  productid: 8,  quantity: 20,  price: 12,},
      {  purchaseId: 10,  shopId: 2,  productid: 8,  quantity: 15,  price: 11,},
      {  purchaseId: 11,  shopId: 2,  productid: 8,  quantity: 10,  price: 12,},
      {  purchaseId: 12,  shopId: 2,  productid: 6,  quantity: 5,  price: 40,},
      {  purchaseId: 13,  shopId: 1,  productid: 1,  quantity: 20,  price: 25,},
      {  purchaseId: 14,  shopId: 1,  productid: 2,  quantity: 20,  price: 32,},
      {  purchaseId: 15,  shopId: 1,  productid: 3,  quantity: 30,  price: 27,},
      {  purchaseId: 16,  shopId: 1,  productid: 4,  quantity: 40,  price: 31,},
      {  purchaseId: 17,  shopId: 3,  productid: 8,  quantity: 20,  price: 12,},
      {  purchaseId: 18,  shopId: 3,  productid: 8,  quantity: 15,  price: 11,},
      {  purchaseId: 19,  shopId: 4,  productid: 8,  quantity: 10,  price: 12,},
      {  purchaseId: 20,  shopId: 4,  productid: 6,  quantity: 5,  price: 40,},
      {  purchaseId: 21,  shopId: 3,  productid: 1,  quantity: 10,  price: 25,},
      {  purchaseId: 22,  shopId: 3,  productid: 2,  quantity: 15,  price: 32,},
      {  purchaseId: 23,  shopId: 4,  productid: 3,  quantity: 5,  price: 27,},
      {  purchaseId: 24,  shopId: 1,  productid: 4,  quantity: 20,  price: 31,},
      {  purchaseId: 25,  shopId: 2,  productid: 5,  quantity: 10,  price: 8,},
      {  purchaseId: 26,  shopId: 4,  productid: 5,  quantity: 15,  price: 8,},
      {  purchaseId: 27,  shopId: 2,  productid: 5,  quantity: 10,  price: 8,},
      {  purchaseId: 28,  shopId: 1,  productid: 5,  quantity: 5,  price: 8,},
      {  purchaseId: 29,  shopId: 3,  productid: 8,  quantity: 20,  price: 12,},
      {  purchaseId: 30,  shopId: 1,  productid: 8,  quantity: 15,  price: 11,},
      {  purchaseId: 31,  shopId: 2,  productid: 8,  quantity: 10,  price: 12,},
      {  purchaseId: 32,  shopId: 2,  productid: 6,  quantity: 5,  price: 40,},
      {  purchaseId: 33,  shopId: 2,  productid: 1,  quantity: 20,  price: 25,},
      {  purchaseId: 34,  shopId: 1,  productid: 2,  quantity: 20,  price: 32,},
      {  purchaseId: 35,  shopId: 3,  productid: 3,  quantity: 30,  price: 27,},
      {  purchaseId: 36,  shopId: 4,  productid: 4,  quantity: 40,  price: 31,},
      {  purchaseId: 37,  shopId: 2,  productid: 8,  quantity: 20,  price: 12,},
      {  purchaseId: 38,  shopId: 3,  productid: 8,  quantity: 15,  price: 11,},
      {  purchaseId: 39,  shopId: 4,  productid: 8,  quantity: 15,  price: 12,},
      {  purchaseId: 40,  shopId: 4,  productid: 6,  quantity: 5,  price: 40,},
      {  purchaseId: 41,  shopId: 3,  productid: 1,  quantity: 10,  price: 25,},
      {  purchaseId: 42,  shopId: 3,  productid: 2,  quantity: 15,  price: 32,},
      {  purchaseId: 43,  shopId: 1,  productid: 3,  quantity: 5,  price: 27,},
      {  purchaseId: 44,  shopId: 1,  productid: 4,  quantity: 20,  price: 31,},
      {  purchaseId: 45,  shopId: 3,  productid: 5,  quantity: 10,  price: 8,},
      {  purchaseId: 46,  shopId: 2,  productid: 5,  quantity: 15,  price: 8,},
      {  purchaseId: 47,  shopId: 2,  productid: 5,  quantity: 10,  price: 8,},
      {  purchaseId: 48,  shopId: 4,  productid: 5,  quantity: 5,  price: 8,},
      {  purchaseId: 49,  shopId: 2,  productid: 8,  quantity: 20,  price: 12,},
      {  purchaseId: 50,  shopId: 2,  productid: 8,  quantity: 15,  price: 11,},
      {  purchaseId: 51,  shopId: 2,  productid: 8,  quantity: 10,  price: 12,},
      {  purchaseId: 52,  shopId: 4,  productid: 6,  quantity: 5,  price: 40,},
      {  purchaseId: 53,  shopId: 3,  productid: 1,  quantity: 20,  price: 25,},
      {  purchaseId: 54,  shopId: 1,  productid: 2,  quantity: 20,  price: 32,},
      {  purchaseId: 55,  shopId: 1,  productid: 3,  quantity: 30,  price: 27,},
      {  purchaseId: 56,  shopId: 1,  productid: 4,  quantity: 40,  price: 31,},
      {  purchaseId: 57,  shopId: 3,  productid: 8,  quantity: 20,  price: 12,},
      {  purchaseId: 58,  shopId: 3,  productid: 8,  quantity: 15,  price: 11,},
      {  purchaseId: 59,  shopId: 4,  productid: 8,  quantity: 10,  price: 12,},
      {  purchaseId: 60,  shopId: 4,  productid: 6,  quantity: 5,  price: 40,},
      {  purchaseId: 61,  shopId: 3,  productid: 1,  quantity: 10,  price: 25,},
      {  purchaseId: 62,  shopId: 4,  productid: 2,  quantity: 15,  price: 32,},
      {  purchaseId: 63,  shopId: 1,  productid: 3,  quantity: 5,  price: 27,},
      {  purchaseId: 64,  shopId: 3,  productid: 4,  quantity: 20,  price: 31,},
      {  purchaseId: 65,  shopId: 3,  productid: 5,  quantity: 10,  price: 8,},
      {  purchaseId: 66,  shopId: 4,  productid: 5,  quantity: 15,  price: 8,},
      {  purchaseId: 67,  shopId: 2,  productid: 5,  quantity: 10,  price: 8,},
      {  purchaseId: 68,  shopId: 1,  productid: 5,  quantity: 5,  price: 8,},
      {  purchaseId: 69,  shopId: 3,  productid: 8,  quantity: 20,  price: 12,},
      {  purchaseId: 70,  shopId: 1,  productid: 8,  quantity: 15,  price: 11,},
      {  purchaseId: 71,  shopId: 2,  productid: 8,  quantity: 10,  price: 12,},
      {  purchaseId: 72,  shopId: 2,  productid: 6,  quantity: 5,  price: 40,},
      {  purchaseId: 73,  shopId: 2,  productid: 1,  quantity: 20,  price: 25,},
      {  purchaseId: 74,  shopId: 1,  productid: 2,  quantity: 20,  price: 32,},
      {  purchaseId: 75,  shopId: 3,  productid: 3,  quantity: 30,  price: 27,},
      {  purchaseId: 76,  shopId: 4,  productid: 4,  quantity: 40,  price: 31,},
      {  purchaseId: 77,  shopId: 2,  productid: 8,  quantity: 20,  price: 12,},
      {  purchaseId: 78,  shopId: 3,  productid: 8,  quantity: 15,  price: 11,},
      {  purchaseId: 79,  shopId: 4,  productid: 8,  quantity: 15,  price: 12,},
      {  purchaseId: 80,  shopId: 1,  productid: 6,  quantity: 5,  price: 40,},
    ],
  };
let fs = require("fs");

let fname = "purchase.json";

app.get("/resetData",function(req,res){
    let data = JSON.stringify(datas);
    fs.writeFile(fname,data,function(err){
        if(err) res.status(404).send(err);
        else res.send("Data in file is reset");
    });
})
app.get("/shops",function(req,res){
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err);
        else{
            let shopArray = JSON.parse(data);
            res.send(shopArray.shops);
        }
    })
})
app.get("/products",function(req,res){
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err);
        else{
            let shopArray = JSON.parse(data);
            res.send(shopArray.products);
        }
    })
})
app.get("/purchases",function(req,res){
    let shop = req.query.shop;
    let sort = req.query.sort;
    let product = req.query.product;
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err);
        else{
            let shopArray = JSON.parse(data);
            let arr = [];
            let datam=shopArray.purchases;
            if(product){
                datam=[];
                let catgArr = product.split(",");
                arr = arr.filter((st)=>catgArr.find((c1)=>c1 === st.productid));
                catgArr.forEach(element => {
                    let temp=shopArray.products.filter((ele)=>ele.productName==element);
                    arr.push(...temp);
                });
                arr.forEach(element => {
                    // element.productId;
                    let temp=shopArray.purchases.filter((elem)=>elem.productid==element.productId);
                    datam.push(...temp);
                });
            }
            if(shop){
                datam=[];
                let catgArr = shop.split(",");
                // arr = arr.filter((st)=>catgArr.find((c1)=>c1 === st.shopId));
                console.log(catgArr);
                catgArr.forEach(element => {
                    let temp=shopArray.shops.filter((ele)=>ele.name===element);
                    arr.push(...temp);
                    // console.log(shopArray.shops);
                });
                arr.forEach(element => {
                    // element.productId;
                    let temp=shopArray.purchases.filter((elem)=>elem.shopId==element.shopId);
                    datam.push(...temp);
                });
            }
            // datam= shop ? datam.filter((fl)=>fl.shopId===shop) : datam;
            // datam = product ? datam.filter((fl1)=>fl1.productid===product) : datam;
            datam = sort==="QtyAsc" ? datam.sort((st1,st2)=>st1.quantity-st2.quantity):datam;
            datam = sort==="QtyDesc" ? datam.sort((st1,st2)=>st2.quantity-st1.quantity):datam;
            datam = sort==="ValueAsc" ? datam.sort((st1,st2)=>st1.quantity*st1.price-st2.quantity*st2.price):datam;
            datam = sort==="ValueDesc" ? datam.sort((st1,st2)=>st2.quantity*st2.price-st1.quantity*st1.price):datam;
            console.log(datam);
            res.send(datam);
        }
    })
})

app.get("/totalPurchases/products/:id",function(req,res){
    let id = +req.params.id;
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err);
        else{
            let prodArray = JSON.parse(data);
            let purchase = prodArray.purchases.filter((fl)=>fl.productid===id);
            let arr = purchase.map((ele)=>{
                ele.totalPurchases=ele.quantity*ele.price
                return ele;
            })
            if(arr) res.send(arr);
            else res.status(404).send("No product Found");
        }
    })
})
app.get("/totalPurchases/shops/:id",function(req,res){
    let id = +req.params.id;
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err);
        else{
            let prodArray = JSON.parse(data);
            let purchase = prodArray.purchases.filter((fl)=>fl.shopId===id);
            let arr = purchase.map((ele)=>{
                ele.totalPurchases=ele.quantity*ele.price
                return ele;
            })
            if(arr) res.send(arr);
            else res.status(404).send("No shop Found");
        }
    })
})

app.get("/products/:productId",function(req,res){
    let id = +req.params.productId;
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err);
        else{
            let prodArray = JSON.parse(data);
            let product = prodArray.products.find((st)=>st.productId===id);
            if(product) res.send(product);
            else res.status(404).send("No product Found");
        }
    })
})
app.get("/purchases/products/:id",function(req,res){
    let id = +req.params.id;
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err);
        else{
            let prodArray = JSON.parse(data);
            let product = prodArray.purchases.filter((st)=>st.productid===id);
            if(product) res.send(product);
            else res.status(404).send("No product Found");
        }
    })
})
app.get("/purchases/shops/:id",function(req,res){
    let id = +req.params.id;
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err);
        else{
            let shopArray = JSON.parse(data);
            let shop = shopArray.purchases.filter((st)=>st.shopId===id);
            if(shop) res.send(shop);
            else res.status(404).send("No shop Found");
        }
    })
})

app.post("/shops",function(req,res){
    let body = req.body;
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err);
        else{
            let shopArray = JSON.parse(data);
            let maxId = shopArray.shops.reduce((ele,curr)=>curr.shopId>ele ? curr.shopId : ele,0);
            let newId = maxId+1;
             console.log(maxId);
            let newShop = {...body,shopId:newId};
            shopArray.shops.push(newShop);
            let data1 = JSON.stringify(shopArray);
            fs.writeFile(fname,data1,function(err){
                if(err) res.status(404).send(err);
                else res.send(newShop)
            })
        }
    })
})
app.post("/products",function(req,res){
    let body = req.body;
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err);
        else{
            let ProdArray = JSON.parse(data);
            let maxId = ProdArray.products.reduce((ele,curr)=>curr.productId>ele ? curr.productId : ele,0);
            let newId = maxId+1;
             console.log(maxId);
            let newProd = {...body,productId:newId};
            ProdArray.products.push(newProd);
            let data1 = JSON.stringify(ProdArray);
            fs.writeFile(fname,data1,function(err){
                if(err) res.status(404).send(err);
                else res.send(newProd)
            })
        }
    })
})
app.post("/purchases",function(req,res){
    let body = req.body;
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err);
        else{
            let PurchArray = JSON.parse(data);
            let maxId = PurchArray.purchases.reduce((ele,curr)=>curr.purchaseId>ele ? curr.purchaseId : ele,0);
            let newId = maxId+1;
             console.log(maxId);
            let newPurch = {...body,purchaseId:newId};
            PurchArray.purchases.push(newPurch);
            let data1 = JSON.stringify(PurchArray);
            fs.writeFile(fname,data1,function(err){
                if(err) res.status(404).send(err);
                else res.send(newPurch)
            })
        }
    })
})

app.put("/products/:id",function(req,res){
    let id = +req.params.id;
    let body = req.body;
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err);
        else{
            let ProdArray = JSON.parse(data);
            let index = ProdArray.products.findIndex((st)=>st.productId===id);
            if(index>=0){
                let updateProd = {...ProdArray.products[index], ...body};
                ProdArray.products[index] = updateProd;
                let data1 = JSON.stringify(ProdArray);
                fs.writeFile(fname,data1,function(err){
                    if(err) res.status(404).send(err);
                    else res.send(updateProd);
                })
            }
            else res.status(404).send("No product found");
        }
    });
})