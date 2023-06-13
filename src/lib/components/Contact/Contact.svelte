<section>
  <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="subject" value="Message via website form" />
      <label for="name">Your Name:</label>
      <input id="name" type="text" name="name" />
      <label for="email">Your Email:</label>
      <input id="email" type="email" name="email" />
      <label for="message">Message:</label>
      <textarea id="message" name="message"></textarea>
      <button type="submit">Send</button>
  </form>
</section>

<style>
  section {
    background: var(--color-grey-light);
    padding: 60px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-family: var(--font-stack);
  }

  label, input, textarea {
    width: 100%;
  }

  label {
    margin: 0 0 8px;
  }

  input, textarea {
    min-height: 44px;
    margin-bottom: 16px;
    border-radius: 4px;
    border: none;
    padding: 0 20px;
    box-sizing: border-box;
    font-family: var(--font-stack);
  }

  textarea {
    min-height: 120px;
    padding: 20px;
  }

  @media only screen and (min-width: 1024px)  {
    form {
      min-width: 400px;
    }
  }
</style>