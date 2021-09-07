Game.registerMod("Auto CCS",{
    init:function(){

        Game.Notify(`CCS loaded!`,'',[16,5]);
        this.Objects = ["Cursor","Grandma","Farm","Mine","Factory","Bank","Temple","Wizard tower","Shipment","Alchemy lab","Portal","Time machine","Antimatter condenser","Prism","Chancemaker","Fractal engine","Javascript console","Idleverse"]
        let MOD = this
        MOD.CPS = {
            "Cursor":0,
            "Grandma":0,
            "Farm":0,
            "Mine":0,
            "Factory":0,
            "Bank":0,
            "Temple":0,
            "Wizard tower":0,
            "Shipment":0,
            "Alchemy lab":0,
            "Portal":0,
            "Time machine":0,
            "Antimatter condenser":0,
            "Prism":0,
            "Chancemaker":0,
            "Fractal engine":0,
            "Javascript console":0,
            "Idleverse":0
        }
        MOD.Updatecps();
        console.log(MOD.CPS["Grandma"])
        MOD.starter = false
        MOD.Bestbuilding = "Cursor"
        l('storeTitle').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;bottom:2px;right:2px;display:block;" class="smallFancyButton" id="storeClicker"></a>');

        AddEvent(l('storeClicker'),'click',function(){
            if (MOD.starter == true) {
                MOD.starter = false
            } else {
                MOD.starter = true
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
        this.Updatecps();
        for (building in this.CPS) {
            if (this.buildingMath(building) >= score) {
                score = this.buildingMath(building);
                this.Bestbuilding = building

            }
        }
        if (Game.cookies >= this.getPrice(this.Bestbuilding)){
            Game.Objects[`${this.Bestbuilding}`].buy();
        }
    },
    Updatecps:function(){
        for (building in this.CPS) {
            this.CPS[building] = Game.Objects[`${building}`].storedCps
        }
    },
    getPrice:function(building){
        return Game.Objects[`${building}`].price
    },
    buildingMath:function(building){
        return this.CPS[building] / this.getPrice(building)
    },
    test:function(){
        console.log(this.CPS)
        for(building in this.CPS){
            console.log(building)
        }
    },
    save:function(){
        //use this to store persistent data associated with your mod
    },
    load:function(){
        // idk i acedentaly delete
    },
});