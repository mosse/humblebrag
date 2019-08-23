import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a target="0" href="https://twitter.com/markofmac" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a target="0" href="https://github.com/mosse/" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a target="0" href="https://www.linkedin.com/in/markjemacdonald/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a target="0" href="mailto:hello@markm.ac" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>Photo by <a target="0" href="https://unsplash.com/@artofbryce?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bryce Evans</a> on <a target="0" href="https://unsplash.com">Unsplash</a></li>
                        
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
