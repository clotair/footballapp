var mongoose = require('mongoose'),
Tournois = mongoose.model('Tournois');
Arbitre = mongoose.model('Arbitre');
Terrain = mongoose.model('Terrain');
Joueur = mongoose.model('Joueur');
Calendrier = mongoose.model('Calendrier');
Match = mongoose.model('Match');
StatMatch = mongoose.model('StatMatch');
Programme = mongoose.model('Programme');
Poule = mongoose.model('Poule')
exports.intit = function(req,res){
    //on verifie les droits
    if(typeof(req.session.auth) == 'undefined'){
        return res.send({status:null,message:'AuhtError'}) 
      }else{
          //on regarde si le tournois es sien
        let autre = true
        for(let elm of req.session.auth.tournois){
            if(elm == req.body.id){
                autre = false
            }
        }
        if(autre){
            return   res.send({status:false,message:'NotFound'})
        }
         Tournois.updateOne({'_id':req.body.id},{nom:req.body.nom,situation:req.body.situation,reglement:req.body.reglement,status:'incomplet0'},function(err,resultat){
            if(err){
               return res.send({status:null, message:err})
            }
            return res.send({status:true})
         })
      }
}

randomiseur = function(tab){

     if(tab!=[]) {
        let num = Math.floor(Math.random() * tab.lenght)
        console.log(num,tab)
        return tab.splice(num).concat(randomiseur(tab))
     }
        
      return [] 

}
updateprogramme=function(id,date,idp){
    Tournois.findOne({_id:idp},function(err,t){
        if(err){
            return console.log('errp')
        }
        Programme.findOne({_id:t.programme},function(err,p){
            if(p){
                Programme.updateOne({_id:idp},{matchs:p.matchs.push({match:id,date:date})})
            }
        })
    })

}
creerpoule=function(nom,valeur,equipes,id){
    if(equipes.lenght == 2){
        Poule.create({tournois:id,nom:nom,niveau:valeur,
            classement:[{equipe:equipes[0]},{equipe:equipes[1]}]},function(){
                if(err){
                    console.log(err)
                    return false
                }
                updatepool(pl._id,id)
                creermatch(equipes,pl._id)
            })
    }else{
        Poule.create({tournois:id,nom:nom,niveau:valeur,
            classement:[{equipe:equipes[0]},{equipe:equipes[1]},{equipe:equipes[2]},{equipe:equipes[3]}]},function(err,pl){
                if(err){
                    console.log(err)
                    return false
                }
                updatepool(pl._id,id)
                creermatch(equipes,pl._id)
            })
    }

}
creermatch = function(equipes, id){
    if(equipes.lenght == 2){
        Match.create({equipes:[{equipe:equipes[0],but:0},{equipe:equipes[1],but:0}],status:'pasjoeur',poule:id},function(err, bien){
          if(err){
              console.log(err)
              return false
          }
          updatepoole(bien._id,id)  
        })
    }else {
        if(equipes.lenght>2){
            let equipe = equipes.pop()
            for(let i of equipes){
                creermatch([].push(equipe,i),id)
            }
            creermatch(equipes,id)
        }
    }

}
updatepoole=function(idmatch,id){
    Poule.findOne({"_id":id},function(err,poule){
        if(err){
            console.log(err)
            return false
        }
        tab = []
        tab = poule.matchs
        tab.push(idmatch)
        Poule.updateOne({"_id":id},{matchs:tab},function(err,bien){
            if(err){
                console.log(err)
                return false
            }
            console.log('poule update')
        })
    })
}
updatepool=function(v,t){
    Tournois.findOne({_id:t},function(err,tour){
        if(err){
            return console.log('err update pool')
        }
        tab = []
        tab = tour
        tab.poules.push(v)
        Tournois.update({_id:t},{poules:tab},function(err,p){
  
        })
    })

}

exports.findAll = function(req, res){
    Tournois.find({},function(err, results) {
      if(err){
        res.send({status:false,message:err})
      }
      return res.send(results);
    });
  };
  exports.findById = function(req, res){
    var id = req.params.id;
    Tournois.findOne({'_id':id},function(err, result) {
      if(err){
        res.send({status:false,message:err})
      }
      return res.send(result);
    });
  };
exports.generate = function(req,res){
    if(typeof(req.session.auth) == 'undefined'){
        return res.send({status:null,message:'AuhtError'}) 
      }
    Tournois.findOne({"_id":req.body.id},function(err,cool){
        if(err){
            res.send({status:null,message:err})
        }
        if(cool){
            if(!cool.equipes)req.send({statud:false,message:'PasEquipe'})
            equipes = randomiseur([].concat(cool.equipes))
            //terrains = randomiseur(cool.terrains)
            //arbitres = randomiseur(arbitres)
            creerpoule('A',1,equipe.splice(1,4))
            creerpoule('B',1,equipe.splice(1,4))
            creerpoule('C',1,equipe.splice(1,4))
            creerpoule('D',1,equipe.splice(1,4))
            return res.send({status:true,tournois:getone(req.body.id)})
        }
        res.send({status:null,message:'NotFound'})
    })
}