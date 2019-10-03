const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/court-selection', function (req, res) {

  let courtSelected = req.session.data['court-name']
  global.gCourtName = courtSelected;
  res.render('select-topic',{ 'courtName' : gCourtName })

})


router.post('/select-topic', function (req, res) {
  let selectTopic = req.session.data['select-topic']
  console.log('selectTopic ' + selectTopic)

  if (selectTopic == "facilities") {
    res.redirect('more-information')
  } else if (selectTopic == "service") {
    res.redirect('more-information')
  } else if (selectTopic == "staff") {
    res.redirect('more-information')
  } else if (selectTopic == "my-case") {
    res.redirect('more-information')
  } else if (selectTopic == "info-and-guidance") {
    res.redirect('more-information')
  } else {
    res.redirect('more-information')
  } 
})
router.post('/response-required-yes-no', function (req, res) {

  let responseRequired = req.session.data['response-required']

	if (responseRequired == 'yes') {
    res.redirect('contact-details')
	}

    else {
    res.redirect('formal-complaint')
	}
})

router.post('/formal-complaint-yes-no', function (req, res) {

  let formalComplaint = req.session.data['formal-complaint']

	if (formalComplaint == 'yes') {
    res.redirect('optic-complaint')
	}

    else {
    res.redirect('thank-you')
	}
})


module.exports = router
