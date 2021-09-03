Game.registerMod("Auto CCS",{
    init:function(){
        Game.Notify(`CCS loaded!`,'',[16,5]);
        let MOD = this
        MOD.starter = false
        l('storeTitle').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;bottom:2px;right:2px;display:block;" class="smallFancyButton" id="storeClicker"></a>');
        AddEvent(l('storeClicker'),'click',function(){
            if (MOD.starter == true) {
                MOD.starter = false
            } else {
                MOD.starter = true
            }
		});
        Game.registerHook('logic',function(){
            if (MOD.starter == true) {
                MOD.mainLoop();
            }

        }); 

    },
    mainLoop:function(){
        this.clicker();       
    },
    clicker:function(){
        Game.lastClick = Game.time-5;
        Game.ClickCookie({detail:1,preventDefault:()=>{}})     

    },
    save:function(){
        //use this to store persistent data associated with your mod
    },
    load:function(str){
        //do stuff with the string data you saved previously

    },
});