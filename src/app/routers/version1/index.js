const express = require('express')
const userRouters = require('../../modules/userModule/user.routes')
const authRoute = require('../../modules/authModule/auth.routes')
const categoryRouter = require('../../modules/categoryModule/category.routes')
const productRouter = require('../../modules/productModule/product.routes')
const portfolioRouter = require('../../modules/portfolioModule/portfolio.routes')
const ourTeamRouter = require('../../modules/ourTeamModule/ourTeam.routes')
const certificateRouter = require('../../modules/certificateModule/certificate.routes')
const partnerRouter = require('../../modules/partnerModule/partner.routes')
const blogRouter = require('../../modules/blogModule/blog.routes')
const bannerRouter = require('../../modules/bannerModule/banner.routes')
const webHomeRouter = require('../../modules/webHomeModule/webHome.routes')
const messageRouter = require('../../modules/messageModule/message.routes')
const heroRouter = require('../../modules/heroModule/hero.routes')
const dashbaordRouter = require('../../modules/dashboard/dashboard.routes')

const router = express.Router()

router.use('/user', userRouters)
router.use('/auth', authRoute)
router.use('/category', categoryRouter)
router.use('/product', productRouter)
router.use('/portfolio', portfolioRouter)
router.use('/our-team', ourTeamRouter)
router.use('/certificate', certificateRouter)
router.use('/partner', partnerRouter)
router.use('/blog', blogRouter)
router.use('/web-banner', bannerRouter)
router.use('/web-home', webHomeRouter)
router.use('/message', messageRouter)
router.use('/hero', heroRouter)
router.use('/dashboard', dashbaordRouter)

module.exports = router