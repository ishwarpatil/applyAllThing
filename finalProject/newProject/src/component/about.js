import React from 'react';
import './jq';

class About extends React.Component{
    render(){
        return (
            <div className="container">
                <h2>Jquery Table Row Draggable and Sortable</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Course</th>
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td><a href="http://www.expertphp.in/tutorials/1/php">PHP</a></td>
                        <td>Learn online PHP course </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><a href="http://www.expertphp.in/tutorials/5/css">CSS</a></td>
                        <td>Learn online CSS course</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><a href="http://www.expertphp.in/tutorials/6/javascript">JS</a></td>
                        <td>Learn online JS course</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td><a href="http://www.expertphp.in/tutorials/12/seo">SEO</a></td>
                        <td>Learn online SEO course</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td><a href="http://www.expertphp.in/tutorials/2/mysql">MySQL</a></td>
                        <td>Learn online MySQL course</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default About;