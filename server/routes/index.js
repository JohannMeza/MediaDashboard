const { Router } = require('express');
const Networks = require('../models/networks');
const router = Router();

router.get('/networks', async (req, res) => {
  const networks = await Networks.findOne();
  res.json(networks)
})

router.post('/networks', async (req, res) => {
  const { facebook_followers, 
    facebook_likes, 
    facebook_views, 
    twitter_follewers, 
    twitter_likes, 
    twitter_views, 
    instagram_followers, 
    instagram_likes, 
    instagram_views } = req.body;
    
  if (!facebook_followers &&
    !facebook_likes &&
    !facebook_views &&
    !twitter_follewers &&
    !twitter_likes &&
    !twitter_views &&
    !instagram_followers &&
    !instagram_likes &&
    !instagram_views ) return res.status(400).json({ "Data incomplete": "Datos incompletos" })

  const networks = new Networks({ facebook_followers, 
    facebook_likes, 
    facebook_views, 
    twitter_follewers, 
    twitter_likes, 
    twitter_views, 
    instagram_followers, 
    instagram_likes, 
    instagram_views });

  await networks.save();
  res.json(networks)
})

router.put('/networks/:id', async ( req, res) => {
  try {
    const networks = await Networks.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!networks) return res.status(404).json({ 'Not found': 'No encontrado' })
    res.json(networks);
  } catch (err) {
    return res.status(500).send(err)
  }
})

module.exports = router;