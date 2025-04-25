const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;
    const contacts = await ContactsRepository.findAll(orderBy);
    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    const { name, email, phone, category_id } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (!email) {
      return response.status(400).json({ error: 'Email is required' });
    }

    if (!phone) {
      return response.status(400).json({ error: 'Phone is required' });
    }

    const existingContact = await ContactsRepository.findByEmail(email);
    if (existingContact) {
      return response
        .status(400)
        .json({ error: 'This email is already in use' });
    }

    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (!email) {
      return response.status(400).json({ error: 'Email is required' });
    }

    if (!phone) {
      return response.status(400).json({ error: 'Phone is required' });
    }

    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    const existingContact = await ContactsRepository.findByEmail(email);
    if (existingContact && existingContact.id !== id) {
      return response
        .status(400)
        .json({ error: 'This email is already in use' });
    }

    await ContactsRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });
    const updatedContact = await ContactsRepository.findById(id);
    response.json(updatedContact);
  }

  async delete(request, response) {
    const { id } = request.params;

    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

// Singleton instance of ContactController
module.exports = new ContactController();
