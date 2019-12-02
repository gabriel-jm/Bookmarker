"use strict"

// Imports
import FormManager from './Form/FormManager.js'
import FormActions from './Form/FormActions.js'

// Constants
const formQuery = '.insert-site-form'

// Objects
const formActions = new FormActions()

// Event: Document Load
document.addEventListener('DOMContentLoaded', formActions.init, true)

// Event: Form submit
document.querySelector(formQuery).addEventListener('submit', event => {
	event.preventDefault()

	const formManager = new FormManager(event.target)

	formActions.submitingFormValues(formManager)

	event.target.reset()
	event.target.setAttribute('keyid', null)

}, true)