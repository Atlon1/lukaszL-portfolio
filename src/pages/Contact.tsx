import React from 'react';
import {BsArrowRight} from "react-icons/bs";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";

const Contact = () => {
    return (
        <div>
            <div>
                <div>
                    <h2>Skontkatuj sie ze mną</h2>
                    <form>
                        <div>
                            <input type='text'/>
                            <input type='text'/>
                        </div>
                        <input type='text'/>
                        <textarea></textarea>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;