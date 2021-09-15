Game.registerMod("Auto CCS",{
    init:function(){
        Game.Notify(`CCS loaded!`,'',[16,5]);
        let MOD = this
        MOD.starter = false
        MOD.Bestbuilding = "Grandma"
        MOD.tfboost = 0.0
        // BAsicly we have to hard code it even CM does it so my idea is wacky                                         18                                 25                       30                                                40                                                50                                                60                                                70                       75                       80                                                90                                               100                                                110                                               120                                               130                                               140                                               150                                               160                                               160                                               170                                               180                                               190                                                    200                                               210                                               220                                               230                                               240                                          250                                               260                                               270                                               280                                               290                                               300 NEARLY HALF WAY!                              310                                               320                                               330                                               340                                               350                                               360             jank                              370                                               380                                               390                                               400                                               410                                               420 hahaha                                        430                                               440                                                450                                               460                                               470                                               480                                              490                                                500                                               510                                                    520                                               530                                               540                                               550                                               560                                               570                                               580                                               590                                               600                                               610                                               620                                               630                                               640                                               650                                               660 last cb&tf btw       666                 670                                               680                                               690                                               700                                               710                                               720
        MOD.upgradetypes = ["x2","x2","x2","tf","tf","tf","tf","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","km","km","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","tf","x2","x2","x2","x2","x2","x2","x2","x2","ig","ig","km","fc","fc","gt","gt","gt","gt","gt","gt","gt","rt","tr","rt","rt","rt","rt","rt","rt","rt","rt","ig","cb","cb","cb","cb","ig","fc","fc","tf","ig","ig","ig","ig","rt","fc","fc","fc","ig","fc","fc","fc","fc","fc","fc","fc","x2","x2","x2","x2","gt","fc","fc","fc","fc","km","tf","x2","x2","x2","x2","x2","x2","x2","x2","x2","cb","fc","fc","fc","fc","fc","fc","fc","fc","fc","hc","hc","hc","hc","hc","fc","fc","fc","fc","fc","fc","fc","ig","ig","fc","fc","fc","fc","fc","fc","fc","fc","fc","st","st","st","st","st","st","st","st","st","st","st","st","st","st","st","st","st","st","st","st","st","st","st","st","st","st","st","fc","fc","fc","fc","fc","fc","x2","x2","x2","x2","x2","gt","ig","ig","ig","ig","ig","ig","km","tf","tf","cb","cb","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","fc","fc","fc","fc","fc","fc","ig","ig","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","ig","ig","ig","cb","ig","ig","ig","ig","fc","fc","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","gt","gt","gt","tn","tn","tn","fc","fc","fc","fc","fc","fc","fc","fc","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","km","km","km","ig","cd","ig","ig","ig","ig","ig","fc","ig","ig","ig","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","ig","cb","cb","ig","su","su","su","su","su","su","su","su","su","su","su","su","su","su","su","su","su","su","su","su","su","su","su","su","ig","ig","ig","ig","ig","ig","ig","fc","fc","fc","fc","fc","fc","fc","fc","ig","ig","ig","ig","ig","ig","ig","gt","x2","x2","x2","x2","x2","x2","x2","x2","su","km","fc","cb","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","km","su","fc","fc","fc","fc","fc","ig","ig","ig","ig","fc","fc","fc","fc","fc","fc","ig","cb","cb","km","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","ig","ig","fc","fc","fc","fc","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","km","ig","ig","fc","fc","fc","fc","fc","fc","fc","fc","ig","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","ig","gt","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","su","su","fc","fc","ig","fc","ig","ig","ig","ig","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","ig","ig","ig","ig","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","fc","ig","ig","gt","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","su","su","fc","fc","fc","fc","fc","fc","km","fc","fc","fc","fc","fc","fc","fc","fu","fu","fu","fu","fu","fu","fu","fu","fu","fu","fu","fu","fu","fu","fu","fu","fu","fu","fu","ig","km","fu","ig","ig","fc","ig","ig","cd","cd","cd","cd","fc","fc","fc","fc","fc","fc","fc","fc","tf","cb","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","fc","fc","fc","fc","fc","x2","gt","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","su","su","fu","fc","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","x2","ig","ig","ig","ig","fc","fc","fc","fc","fc","fc","fc","fc"]
        // x2 = a times to upgrade | tf = thousnad fingers upgrade | km is a milk upgrade | fc = flavored cookie | ig are ignored upgrades we only use this to save a spot an expample would be GC upgrades as quaintifiblity is hard of these could be added later ig | gt = grandama type | rt = reasherch ones | cb = clicking boost | hc = hevlany chip boost the stuff that make asenstion better | st =stanta upgrades | cd = cookie drangon upgrades | su = synergy upgrades | fu = fortune upgrades
        l('storeTitle').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;bottom:2px;right:2px;display:block;" class="smallFancyButton" id="storeClicker"></a>');

        AddEvent(l('storeClicker'),'click',function(){
            if (MOD.starter == true) {
                MOD.starter = false;
            } else {
                MOD.starter = true;
            }
		});
        // add all init functions before here
        Game.registerHook('logic',function(){
            if (MOD.starter == true) {
                MOD.mainLoop();
            }

        }); 

    },
    mainLoop:function(){
        this.clicker();
        this.buildingPicker();    
    },
    clicker:function(){
        Game.lastClick = Game.time-5;
        Game.ClickCookie({detail:1,preventDefault:()=>{}});  

    },
    buildingPicker:function(){
        score = 0.0
        for (Objects in Game.Objects) {
            if (this.buildingMath(Objects) >= score) {
                score = this.buildingMath(Objects);
                this.Bestbuilding = Objects;

            }
        }
        if (Game.cookies >= this.getPrice(this.Bestbuilding)){
            Game.Objects[`${this.Bestbuilding}`].buy();
        }
    },
    upgradepicker:function(){
        score = 0.0
        for (let i = 0; i < Game.UpgradesInStore.length; i++) {
            var storeObj = Game.UpgradesInStore[i];
            if(calculateGains(this.upgradetypes[storeObj.id],storeObj.id) >= score) {

            }
        }
    },
    getPrice:function(building){
        return Game.Objects[`${building}`].price;
    },
    buildingMath:function(building){
        return Game.Objects[`${building}`].storedCps / this.getPrice(building);
    },
    x2upgrades:function(id){
        price = Game.UpgradesById[id].getPrice();
        totalCps = Game.UpgradesById[id].buildingTie.storedTotalCps;
        return(totalCps * 2 / price);
    },
    milkMath:function(id){
        ml = Game.milkProgress;
        if(id == 31){
            mf = 0.1;
        }
        else if (id == 613){
            mf = 0.115;
        }
        else if(id in [32,494]){
            mf = 0.125;
        }
        else if(id in [54,462]){
            mf = 0.15;
        }
        else if(id in [108,442]){
            mf = 0.175;
        }
        else{
            mf = 0.2;
        }
        totalboost = 1 + mf * ml;
        return((Game.buildingCps * totalboost)/price);
    },
    flavoredcookieMath:function(id){
        price = Game.UpgradesById[id].price;
        power = (Game.UpgradesById[id].power / 100) + 1;
        return((Game.buildingCps * power)/price);
    },
    tfmath:function(){
        currentClicks = this.clickCps();
        temptfboost = this.tfboost;
        if(id == 3){
            temptfboost += .1
        }
        else if(id == 4){
            temptfboost = temptfboost * 5;
        }
        else if(id == 5){
            temptfboost = temptfboost * 10;
        }
        else{
            temptfboost = temptfboost * 20;
        }
        noncursorobjects = Game.BuildingsOwned - Game.Objects.Cursor.amount;
        cursorBoost = (temptfboost * noncursorobjects) * Game.Objects.Cursor.amount;
        clickBoost = (temptfboost * noncursorobjects) * currentClicks;
        return((cursorBoost + clickBoost)/price);
    },
    clickCps:function(){
        return Game.computedMouseCps * 15;
    },
    GrandmaTypeMath:function(id){
        incremental = Game.UpgradesById[id].buildingTie.id - 1; //sneaky work around for not having to hard code
        return(Game.UpgradesById[id].buildingTie.storedTotalCps * (.01 *(Math.floor(Game.Objects.Grandma.amout/ incremetnal))));
    },
    clickBoostMath:function(id){
        price = Game.UpgradesById[id].price;
        currentClicks = clickCps();
        boostamount = Game.buildingCps / 100;
        return((currentClicks * boostamount)/price);
    },
    synergyMath:function(id){
        price = Game.UpgradesById[id].price;
        building1 = Game.UpgradesById[id].buildingTie1;
        building2 = Game.UpgradesById[id].buildingTie2;
        building1boost = building1.totalCps * (building2.amount * .05);
        building2boost = building2.totalCps * (building1.amount * .01);
        return((building1boost + building2boost)/price);
    },
    fortuneMath:function(id){
        price = Game.UpgradesById[id].price
        if(id in [621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,698]){
            building = Game.UpgradesById[id].buildingTie;
            cpsboost = building.totalCps * 0.14;
            return(cpsboost/price);
        }
        else if(id == 639){
            boost = Game.buildingCps * 0.07;
            return boost/price;
        }
        else{
          boost = (Game.buildingCps * .01) + this.clickCps(); 
        }
    },
    dragonUpgrades:function(id){
        price = Game.UpgradesById[id].price
        if(id == 324){
            return 1; //just buy the dragon bc yes and its only 25 cookies why quantify it
        }
        else if(id == 648){
            boost = Game.buildingCps * 0.03;
            return boost/price;
        }
        else{
            return 0;
        }
    },
    santaMath:function(id){
        price = Game.UpgradesById[id].price;
        if(id == 152){
            return 1; // same as dragon egg just buy it
        }
        else if(id in [153,154]){
            TotalCps = Game.buildingCps;
            boost = TotalCps * .15;
            return TotalCps/price;
        }
        else if(id in [155,156]){
            TotalCps = Game.buildingCps;
            boost = TotalCps * .01;
            return TotalCps/price;
        }
        else if(id == 160){
            return (Game.buildingCps * .01)/price;
        }
        else if(id == 162){
            return Game.building.Grandma.totalCps * 2/price;
        }
        else if (id == 164){
            boost = this.clickCps() * 0.1;
            return boost/price;
        }
        else if(id == 165){
            currentlevel = Game.santaLevel;
            boost = (currentlevel * 0.03) * Game.buildingCps;
            return boost/price;
        }
        else if(id == 168){
            boost = Game.buildingCps * 0.21;
            return boost/price;
        }
        else{
            return 0;
        }
    },
    HevanlyChips:function(id){
        price = Game.UpgradesById[id].price
        if (Game.cookies >= price * 2) {
            return 1;
        }
        else {
            return 0;
        }
    },
    calculateGains:function(listitem,id){
        switch (listitem) {
            case "x2": //x2 upgrades
                return this.x2upgrades(id);
            case "gt": // grandma types
                return this.GrandmaTypeMath(id);
            case "fc": // flavored cokeis
                return this.flavoredcookieMath(id);
            case "tf": // thousand fingers
                return this.tfmath(id);
            case "cb": // clicking boost upgrages
                return clickBoostMath(id);
            case "km": // kitten upgrages
                return this.milkMath(id);
            case "su": // synergy upgrades
                return this.synergyMath(id);
            case "fu": // fortune upgrades
                return this.fortuneMath(id);
            case "cd": // cookie dragon drops
                return this.dragonUpgrades(id);
            case "hc": // hevanly chips
                return this.HevanlyChips(id);
            case "st": // Santa upgrades
                return this.santaMath(id);
            default:
                break;
        }
    },
    save:function(){
        //use this to store persistent data associated with your mod
    },
    load:function(){
        // idk i acedentaly delete
    },
});