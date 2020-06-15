import Category from './models/Category';
import MenuItem from './models/MenuItem';


export const CATEGORIES = [

    new Category('01', 'Pizza', 'https://image.freepik.com/free-photo/top-view-delicious-pizza_23-2148570346.jpg'),
    new Category('02', 'Burger', 'https://image.freepik.com/free-photo/delicious-grilled-burger_62847-149.jpg'),
    new Category('03', 'Sandwich', 'https://image.freepik.com/free-photo/club-sandwich-panini-with-ham-tomato-cheese-basil_2829-1404.jpg'),
    new Category('04', 'Italian', 'https://image.freepik.com/free-photo/pasta-with-tomato-sauce-plate_1220-5179.jpg'),
    new Category('05', 'Maxican', 'https://image.freepik.com/free-photo/burritos-wraps-with-minced-beef-vegetables-wooden-surface_2829-8275.jpg'),
    new Category('06', 'Chinese', 'https://image.freepik.com/free-photo/japanese-food-maki-nigiri-sushi-set-black-close-up_123827-1429.jpg'),
    new Category('07', 'Dessert', 'https://image.freepik.com/free-photo/tasty-cupcakes-white-wooden-table_166650-596.jpg'),
    new Category('08', 'Coffee', 'https://image.freepik.com/free-photo/white-coffee-cup-roasted-coffee-beans-around_35570-794.jpg'),


];

export const MENUITEMS = [

    //pizza
    new MenuItem('01', 'Neapolitan Pizza', '01', 'Anyone who says that money cannot buy happiness has clearly never spent their money on pizza', 'https://image.freepik.com/free-photo/delicious-pizza-ingredients-wooden_185193-5973.jpg', '299'),
    new MenuItem('02', 'Chicago Pizza', '01', 'Anyone who says that money cannot buy happiness has clearly never spent their money on pizza', 'https://image.freepik.com/free-photo/pizza-with-ham-mushroom_95419-898.jpg', '399'),
    new MenuItem('03', 'Greek Pizza', '01', 'Anyone who says that money cannot buy happiness has clearly never spent their money on pizza', 'https://image.freepik.com/free-photo/large-pizza-wooden-table_179755-5726.jpg', '359'),
    new MenuItem('04', 'California Pizza', '01', 'Anyone who says that money cannot buy happiness has clearly never spent their money on pizza', 'https://image.freepik.com/free-photo/large-pizza-wooden-table_179755-5727.jpg', '499'),

    //Burger
    new MenuItem('05', 'Elk Burgers', '02', 'Eat clean to stay fit, have a burger to stay sane.', 'https://image.freepik.com/free-photo/close-up-burger-with-stone-background_23-2148273030.jpg', '199'),
    new MenuItem('06', 'Portobello Mushroom Burgers', '02', 'Eat clean to stay fit, have a burger to stay sane.', 'https://image.freepik.com/free-photo/delicious-beef-burgers-wooden-board_23-2148290634.jpg', '299'),
    new MenuItem('07', 'Veggie Burgers', '02', 'Eat clean to stay fit, have a burger to stay sane.', 'https://image.freepik.com/free-photo/delicious-cheeseburger_1232-503.jpg', '159'),
    new MenuItem('08', 'Bison Burgers', '02', 'Eat clean to stay fit, have a burger to stay sane.', 'https://image.freepik.com/free-photo/side-view-double-cheeseburger-with-grilled-beef-patties-cheese-lettuce-leaf-burger-buns_141793-4883.jpg', '259'),

    //Sandwich
    new MenuItem('09', 'Club sandwich', '03', "Too few people understand a really good sandwich.", 'https://image.freepik.com/free-photo/club-sandwich-panini-with-ham-cheese-tomato-herbs-top-view_2829-19709.jpg', '199'),
    new MenuItem('10', 'submarine sandwich', '03', "Too few people understand a really good sandwich.", 'https://image.freepik.com/free-photo/tasty-breakfast-appetizing-croissant-with-salami-cheese-tomatoes_2829-5526.jpg', '159'),
    new MenuItem('11', 'Open-faced sandwich', '03', "Too few people understand a really good sandwich.", 'https://image.freepik.com/free-photo/side-view-sandwich-white-bread-with-grilled-meat-cutlet-cheese-lettuce-french-fries-mayo-ketchup-boardjpg_141793-5081.jpg', '199'),
    new MenuItem('12', 'Pocket sandwich', '03', "Too few people understand a really good sandwich.", 'https://image.freepik.com/free-photo/tasty-big-sandwich-white_155003-765.jpg', '109'),

    //Italian
    new MenuItem('13', 'Panzenella', '04', 'The trouble with eating Italian food is that five or six days later you’re hungry again.', 'https://image.freepik.com/free-photo/lasagna-with-minced-meat-green-peas-sauce_2829-15171.jpg', '499'),
    new MenuItem('14', 'Bruschetta', '04', 'The trouble with eating Italian food is that five or six days later you’re hungry again.', 'https://image.freepik.com/free-photo/classic-lasagna-with-bolognese-sauce_2829-14066.jpg', '459'),
    new MenuItem('15', 'Pasta', '04', 'The trouble with eating Italian food is that five or six days later you’re hungry again.', 'https://image.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-8727.jpg', '359'),
    new MenuItem('16', 'French Fries', '04', 'The trouble with eating Italian food is that five or six days later you’re hungry again.', 'https://image.freepik.com/free-photo/french-fries-with-ketchup-wood-table_23-2148272961.jpg', '259'),

    //Maxican
    new MenuItem('17', 'Chicken Quesadillas', '05', 'Mexican food is one of the best culinary experiences that people can have.', 'https://image.freepik.com/free-photo/baked-tandoori-chicken-delicious-indian-cuisine_158388-2194.jpg', '199'),
    new MenuItem('18', 'Guacamole', '05', 'Mexican food is one of the best culinary experiences that people can have.', 'https://image.freepik.com/free-photo/guacamole-dip_144627-26998.jpg', '399'),
    new MenuItem('19', 'Keto Taco', '05', 'Mexican food is one of the best culinary experiences that people can have.', 'https://image.freepik.com/free-photo/close-up-person-with-plate-full-tacos_23-2148329172.jpg', '599'),
    new MenuItem('20', 'Taco Lettuce Wraps', '05', 'Mexican food is one of the best culinary experiences that people can have.', 'https://image.freepik.com/free-photo/pita-stuffed-with-chicken-peppers_2829-17827.jpg', '499'),

    //Chinese
    new MenuItem('21', 'Quick Noodles', '06', 'I may have ruined my life, but at least I got to eat some really good Chinese food.', 'https://image.freepik.com/free-photo/noodles-spicy-bowl-with-ingredients-black-cement-surface_1150-19806.jpg', '199'),
    new MenuItem('22', 'Spring Rolls', '06', 'I may have ruined my life, but at least I got to eat some really good Chinese food.', 'https://image.freepik.com/free-photo/deep-fried-spring-rolls_1388-95.jpg', '159'),
    new MenuItem('23', 'Stir Fried Tofu', '06', 'I may have ruined my life, but at least I got to eat some really good Chinese food.', 'https://image.freepik.com/free-photo/korean-fried-tofu-deep-fried-mixed-kochujung-sauce_71919-689.jpg', '189'),
    new MenuItem('24', 'Szechwan Chilli Chicken', '06', 'I may have ruined my life, but at least I got to eat some really good Chinese food.', 'https://image.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg', '199'),

    //Dessert
    new MenuItem('25', 'Tiramisu', '07', 'Life is short and unpredictable. Eat the dessert first!', 'https://image.freepik.com/free-photo/delicious-tiramisu-cake-with-fresh-berries-mint-plate_78677-43.jpg', '499'),
    new MenuItem('26', 'Muffin', '07', 'Life is short and unpredictable. Eat the dessert first!', 'https://image.freepik.com/free-photo/chocolate-chip-muffin_74190-7122.jpg', '459'),
    new MenuItem('27', 'Raspberries Cupcake', '07', 'Life is short and unpredictable. Eat the dessert first!', 'https://image.freepik.com/free-photo/cupcakes-decorated-whipped-cream-frozen-raspberries_114579-7866.jpg', '359'),
    new MenuItem('28', 'Cheese Cake', '07', 'Life is short and unpredictable. Eat the dessert first!', 'https://image.freepik.com/free-photo/cheesecake-with-strawberry-cream-jam-cherry-side-view_141793-3079.jpg', '259'),

    //Coffee
    new MenuItem('29', 'Latte ', '08', 'Coffee is a language in itself.', 'https://image.freepik.com/free-photo/close-up-cup-coffee-with-foam-flower_1112-480.jpg', '499'),
    new MenuItem('30', 'Cappuccino', '08', 'Coffee is a language in itself.', 'https://image.freepik.com/free-photo/barista-work-coffee-shop_158595-2333.jpg', '459'),
    new MenuItem('31', 'Americano', '08', 'Coffee is a language in itself.', 'https://image.freepik.com/free-photo/close-up-coffee-cup-with-milk-sugar_23-2148463973.jpg', '359'),
    new MenuItem('32', 'Espresso', '08', 'Coffee is a language in itself.', 'https://image.freepik.com/free-photo/top-view-cup-coffee-with-roasted-beans_23-2148494621.jpg', '259'),

];


//BKP

// import Category from './models/Category';
// import MenuItem from './models/MenuItem';


// export const CATEGORIES = [

//     new Category('01', 'Pizza',          'https://image.freepik.com/free-photo/top-view-delicious-pizza_23-2148570346.jpg'),
//     new Category('02', 'Burger',          'https://image.freepik.com/free-photo/delicious-grilled-burger_62847-149.jpg'),
//     new Category('03', 'Sandwich',          'https://image.freepik.com/free-photo/club-sandwich-panini-with-ham-tomato-cheese-basil_2829-1404.jpg'),
//     new Category('04', 'Italian',          'https://image.freepik.com/free-photo/pasta-with-tomato-sauce-plate_1220-5179.jpg'),
//     new Category('05', 'Maxican',          'https://image.freepik.com/free-photo/burritos-wraps-with-minced-beef-vegetables-wooden-surface_2829-8275.jpg'),
//     new Category('06', 'Chinese',          'https://image.freepik.com/free-photo/japanese-food-maki-nigiri-sushi-set-black-close-up_123827-1429.jpg'),
//     new Category('07', 'Dessert',          'https://image.freepik.com/free-photo/tasty-cupcakes-white-wooden-table_166650-596.jpg'),
//     new Category('08', 'Coffee',          'https://image.freepik.com/free-photo/white-coffee-cup-roasted-coffee-beans-around_35570-794.jpg'),


// ];

// export const MENUITEMS = [

//     //pizza
//     new MenuItem('01', 'Neapolitan Pizza', '01',          'https://image.freepik.com/free-photo/delicious-pizza-ingredients-wooden_185193-5973.jpg', '299'),
//     new MenuItem('02', 'Chicago Pizza', '01',          'https://image.freepik.com/free-photo/pizza-with-ham-mushroom_95419-898.jpg', '399'),
//     new MenuItem('03', 'Greek Pizza', '01',          'https://image.freepik.com/free-photo/large-pizza-wooden-table_179755-5726.jpg', '359'),
//     new MenuItem('04', 'California Pizza', '01',          'https://image.freepik.com/free-photo/large-pizza-wooden-table_179755-5727.jpg', '499'),

//     //Burger
//     new MenuItem('05', 'Elk Burgers', '02',          'https://image.freepik.com/free-photo/close-up-burger-with-stone-background_23-2148273030.jpg', '199'),
//     new MenuItem('06', 'Portobello Mushroom Burgers', '02',          'https://image.freepik.com/free-photo/delicious-beef-burgers-wooden-board_23-2148290634.jpg', '299'),
//     new MenuItem('07', 'Veggie Burgers', '02',          'https://image.freepik.com/free-photo/delicious-cheeseburger_1232-503.jpg', '159'),
//     new MenuItem('08', 'Bison Burgers', '02',          'https://image.freepik.com/free-photo/side-view-double-cheeseburger-with-grilled-beef-patties-cheese-lettuce-leaf-burger-buns_141793-4883.jpg', '259'),

//     //Sandwich
//     new MenuItem('09', 'Club sandwich', '03',          'https://image.freepik.com/free-photo/club-sandwich-panini-with-ham-cheese-tomato-herbs-top-view_2829-19709.jpg', '199'),
//     new MenuItem('10', 'submarine sandwich', '03',          'https://image.freepik.com/free-photo/tasty-breakfast-appetizing-croissant-with-salami-cheese-tomatoes_2829-5526.jpg', '159'),
//     new MenuItem('11', 'Open-faced sandwich', '03',          'https://image.freepik.com/free-photo/side-view-sandwich-white-bread-with-grilled-meat-cutlet-cheese-lettuce-french-fries-mayo-ketchup-boardjpg_141793-5081.jpg', '199'),
//     new MenuItem('12', 'Pocket sandwich', '03',          'https://image.freepik.com/free-photo/tasty-big-sandwich-white_155003-765.jpg', '109'),

//     //Italian
//     new MenuItem('13', 'Panzenella', '04',          'https://image.freepik.com/free-photo/lasagna-with-minced-meat-green-peas-sauce_2829-15171.jpg', '499'),
//     new MenuItem('14', 'Bruschetta', '04',          'https://image.freepik.com/free-photo/classic-lasagna-with-bolognese-sauce_2829-14066.jpg', '459'),
//     new MenuItem('15', 'Pasta', '04',          'https://image.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-8727.jpg', '359'),
//     new MenuItem('16', 'French Fries', '04',          'https://image.freepik.com/free-photo/french-fries-with-ketchup-wood-table_23-2148272961.jpg', '259'),

//     //Maxican
//     new MenuItem('17', 'Chicken Quesadillas', '05',          'https://image.freepik.com/free-photo/baked-tandoori-chicken-delicious-indian-cuisine_158388-2194.jpg', '199'),
//     new MenuItem('18', 'Guacamole', '05',          'https://image.freepik.com/free-photo/guacamole-dip_144627-26998.jpg', '399'),
//     new MenuItem('19', 'Keto Taco', '05',          'https://image.freepik.com/free-photo/close-up-person-with-plate-full-tacos_23-2148329172.jpg', '599'),
//     new MenuItem('20', 'Taco Lettuce Wraps', '05',          'https://image.freepik.com/free-photo/pita-stuffed-with-chicken-peppers_2829-17827.jpg', '499'),

//     //Chinese
//     new MenuItem('21', 'Quick Noodles', '06',          'https://image.freepik.com/free-photo/noodles-spicy-bowl-with-ingredients-black-cement-surface_1150-19806.jpg', '199'),
//     new MenuItem('22', 'Spring Rolls', '06',          'https://image.freepik.com/free-photo/deep-fried-spring-rolls_1388-95.jpg', '159'),
//     new MenuItem('23', 'Stir Fried Tofu', '06',          'https://image.freepik.com/free-photo/korean-fried-tofu-deep-fried-mixed-kochujung-sauce_71919-689.jpg', '189'),
//     new MenuItem('24', 'Szechwan Chilli Chicken', '06',          'https://image.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg', '199'),

//     //Dessert
//     new MenuItem('25', 'Tiramisu', '07',          'https://image.freepik.com/free-photo/delicious-tiramisu-cake-with-fresh-berries-mint-plate_78677-43.jpg', '499'),
//     new MenuItem('26', 'Muffin', '07',          'https://image.freepik.com/free-photo/chocolate-chip-muffin_74190-7122.jpg', '459'),
//     new MenuItem('27', 'Raspberries Cupcake', '07',          'https://image.freepik.com/free-photo/cupcakes-decorated-whipped-cream-frozen-raspberries_114579-7866.jpg', '359'),
//     new MenuItem('28', 'Cheese Cake', '07',          'https://image.freepik.com/free-photo/cheesecake-with-strawberry-cream-jam-cherry-side-view_141793-3079.jpg', '259'),

//     //Coffee
//     new MenuItem('29', 'Latte ', '08',          'https://image.freepik.com/free-photo/close-up-cup-coffee-with-foam-flower_1112-480.jpg', '499'),
//     new MenuItem('30', 'Cappuccino', '08',          'https://image.freepik.com/free-photo/barista-work-coffee-shop_158595-2333.jpg', '459'),
//     new MenuItem('31', 'Americano', '08',          'https://image.freepik.com/free-photo/close-up-coffee-cup-with-milk-sugar_23-2148463973.jpg', '359'),
//     new MenuItem('32', 'Espresso', '08',          'https://image.freepik.com/free-photo/top-view-cup-coffee-with-roasted-beans_23-2148494621.jpg', '259'),

// ];