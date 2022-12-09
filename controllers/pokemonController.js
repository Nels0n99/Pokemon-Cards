const {Pokemon} = require('../models')
const types = ['fire', 'water'];
module.exports.viewAll = async function(req, res, next) {
    const pokemons = await Pokemon.findAll();
    res.render('index', {pokemons});
}

module.exports.renderEditForm = async function(req, res, next){
    const pokemon = await Pokemon.findByPk(
        req.params.id
    );
    res.render('edit', {pokemon, types});
}

module.exports.updatePokemon = async function (req, res){
    await Pokemon.update(
        {
            class: req.body.class,
            name: req.body.name,
            hp: req.body.hp,
            icon: req.body.icon,
            image: req.body.image,
            secondicon: req.body.secondicon,
            move: req.body.move,
            damage: req.body.damage,
            thirdicon: req.body.thirdicon,
            fourthicon: req.body.fourthicon,
            secondmove: req.body.secondmove,
            seconddamage: req.body.seconddamage,
            weaknessicon: req.body.weaknessicon,
            weaknessamount: req.body.weaknessamount,
            resistanceicon: req.body.resistanceicon,
            retreaticon: req.body.retreaticon
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}

module.exports.deletePokemon = async function(req, res){
    await Pokemon.destroy(
        {
            where:
                {
                    id: req.params.id
                }
        }
    );
    res.redirect('/');
}

module.exports.renderAddForm = function(req,res){
    const pokemon = {
        class: "",
        name: "",
        hp: "",
        icon: "",
        image: "",
        secondicon: "",
        move: "",
        damage: "",
        thirdicon: "",
        fourthicon: "",
        secondmove: "",
        seconddamage: "",
        weaknessicon: "",
        weaknessamount: "",
        resistanceicon: "",
        retreaticon: "",
        type: types[0],
    };
    res.render('add', {pokemon, types});
}

module.exports.addPokemon = async function(req, res){
    await Pokemon.create(
        {
            class: req.body.class,
            name: req.body.name,
            hp: req.body.hp,
            icon: req.body.icon,
            image: req.body.image,
            secondicon: req.body.secondicon,
            move: req.body.move,
            damage: req.body.damage,
            thirdicon: req.body.thirdicon,
            fourthicon: req.body.fourthicon,
            secondmove: req.body.secondmove,
            seconddamage: req.body.seconddamage,
            weaknessicon: req.body.weaknessicon,
            weaknessamount: req.body.weaknessamount,
            resistanceicon: req.body.resistanceicon,
            retreaticon: req.body.retreaticon
        });
    res.redirect('/');
}