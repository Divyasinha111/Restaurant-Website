// import React from "react";
// import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
// import './Reviews.css';
// import divya1 from '../utils/img/divya1.jpg';
// import Person2 from '../utils/img/person2.jpg';
// import Person3 from '../utils/img/person3.jpg';
// import Person4 from '../utils/img/person4.jpg';

// export function Reviews() {
//     return (
//         <div className="reviews-section container">
//             <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
//             <div className="row g-4">
//                 <div className="col-lg-6">
//                     <Card className="h-100 shadow">
//                         <CardBody>
//                             <div className="p-4">
//                                 <CardText>
//                                 Little bit costly but overall good experience in terms of food and service. It has good ambient atmosphere and good sitting arrangement with slow music and also have mocktail bar table. Food quality was good with superb service. Cost for 4 persons food around 2500... but it is good family restaurant in Giridih have good quality food in comparison to others.
//                                 </CardText>
//                             </div>
//                         </CardBody>
//                         <CardFooter className="d-flex align-items-center">
//                             <img src={divya1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
//                             <CardTitle className="text-success">Kuldeep Kaushik</CardTitle>
//                         </CardFooter>
//                     </Card>
//                 </div>
//                 <div className="col-lg-6">
//                     <Card className="h-100 shadow">
//                         <CardBody>
//                             <div className="p-4">
//                                 <CardText>
//                                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia?
//                                 </CardText>
//                             </div>
//                         </CardBody>
//                         <CardFooter className="d-flex align-items-center">
//                             <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" />
//                             <CardTitle className="text-success">Maria Cruz</CardTitle>
//                         </CardFooter>
//                     </Card>
//                 </div>
//                 <div className="col-lg-6">
//                     <Card className="h-100 shadow">
//                         <CardBody>
//                             <div className="p-4">
//                                 <CardText>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor itaque reprehenderit minus tempore. Iste quibusdam facilis excepturi nihil maiores!
//                                 </CardText>
//                             </div>
//                         </CardBody>
//                         <CardFooter className="d-flex align-items-center">
//                             <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="" />
//                             <CardTitle className="text-success">Anna Gold</CardTitle>
//                         </CardFooter>
//                     </Card>
//                 </div>
//                 <div className="col-lg-6">
//                     <Card className="h-100 shadow">
//                         <CardBody>
//                             <div className="p-4">
//                                 <CardText>
//                                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum et voluptate minus error suscipit officiis placeat repudiandae quibusdam officia tempora, reprehenderit, enim, quidem exercitationem laborum!
//                                 </CardText>
//                             </div>
//                         </CardBody>
//                         <CardFooter className="d-flex align-items-center">
//                             <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="" />
//                             <CardTitle className="text-success">Nick Burn</CardTitle>
//                         </CardFooter>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//     )
// }



import React from "react";
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import './Reviews.css';

// Import images correctly
import divya1 from '../utils/img/divya1.jpg';
import divya2 from '../utils/img/divya2.jpg';
import divya3 from '../utils/img/divya3.jpg';
import divya4 from '../utils/img/divya4.jpg';

export function Reviews() {
    return (
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Little bit costly but overall good experience in terms of food and service. It has good ambient atmosphere and good sitting arrangement with slow music and also have mocktail bar table. Food quality was good with superb service. Cost for 4 persons food around 2500... but it is good family restaurant in Giridih have good quality food in comparison to others.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={divya1} className="img-fluid rounded-circle mx-3 shadow" alt="divya1" />
                            <CardTitle className="text-success">Kuldeep Kaushik</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                The food is great. The ambience is very good but they need to replace some covers.

The service was great earlier. But the new waiters lack professionalism.
One of the waitresses was shouting aye bula rha hai.

Would love it if they replace the old flowers on the table and bring back their great service. Food is awesome but they need to work on some dishes.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={divya2} className="img-fluid rounded-circle mx-3 shadow" alt="divya2" />
                            <CardTitle className="text-success">Shubham Kumar</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                One of the best restaurants in the city. This cozy restaurant has left the best impressions! Hospitable hosts, delicious cuisines , wide beverage list and wonderful desserts too. You should definitely try the  chefs specials and biryanis.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={divya3} className="img-fluid rounded-circle mx-3 shadow" alt="divya3" />
                            <CardTitle className="text-success">Shreya Sharma</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                Excellent ambience, service is great and food is also good. Really liked their sweet corn soup, tandoori Mushroom tikka..though paneer chilli can be a lot better.

                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={divya4} className="img-fluid rounded-circle mx-3 shadow" alt="divya4" />
                            <CardTitle className="text-success">Nikita Tangaria</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
