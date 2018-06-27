import React, {Component} from 'react';
import {render} from 'react-dom';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <form action="/charge" method="post" id="payment-form">
                    <div class="form-row inline">
                        <div class="col">
                            <label for="name">
                                Name
                            </label>
                            <input id="name" name="name" placeholder="Jane Doe" required />
                        </div>
                        <div class="col">
                            <label for="email">
                                Email Address
                            </label>
                            <input id="email" name="email" type="email" placeholder="jane.doe@example.com" required />
                        </div>
                    </div>
                    <div class="form-row">
                        <label for="iban-element">
                            IBAN
                        </label>
                        <div id="iban-element">
                        </div>
                        <div id="bank-name"></div>
                    </div>
                    <button>Submit Payment</button>
                </form>
            </div>
        )
    }
}

export default Contact;