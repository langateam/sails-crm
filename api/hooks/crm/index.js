import Marlinspike from 'marlinspike'

class CRM extends Marlinspike {
  constructor (sails) {
    super(sails, module)
  }
}

export default Marlinspike.createSailsHook(CRM)
