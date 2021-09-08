import React, { useState } from 'react'
import { StyleSheet, View} from 'react-native';
import { Text } from 'react-native-elements';
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { Image } from 'react-native-elements';
import { ListItem } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import { FlatList } from "react-native-gesture-handler";
import AddToCart from './addToCart';

const MenuList = () => {
    const menulist = [
    {
        food : "Steak",
        image : "https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg",
        price : "6000",
        desc : "grilled chicken perfect for you."
    },
    {
        food : "Chicken Pie",
        image : "https://guardian.ng/wp-content/uploads/2017/10/nigerian-plantain-and-chicken-pie-e1508087996482.jpg",
        price : "3999",
        desc : "grilled chicken perfect for you."
    },
    {
        food : "Spagetti & Chicken",
        image : "https://www.haddicious.com/wp-content/uploads/2020/04/Haddicious-Jollof-Spaghetti-with-Chicken-.jpg",
        price : "4000",
        desc : "grilled chicken perfect for you."
    },
    {
        food : "Steak",
        image : "https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg",
        price : "6000",
        desc : "grilled chicken perfect for you."
    },
    {
        food : "Chicken Pie",
        image : "https://guardian.ng/wp-content/uploads/2017/10/nigerian-plantain-and-chicken-pie-e1508087996482.jpg",
        price : "3999",
        desc : "grilled chicken perfect for you."
    },
    {
        food : "Spagetti & Chicken",
        image : "https://www.haddicious.com/wp-content/uploads/2020/04/Haddicious-Jollof-Spaghetti-with-Chicken-.jpg",
        price : "4000",
        desc : "grilled chicken perfect for you."
    },
    {
        food : "Steak",
        image : "https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg",
        price : "6000",
        desc : "grilled chicken perfect for you."
    },
    {
        food : "Chicken Pie",
        image : "https://guardian.ng/wp-content/uploads/2017/10/nigerian-plantain-and-chicken-pie-e1508087996482.jpg",
        price : "3999",
        desc : "grilled chicken perfect for you."
    },
    {
        food : "Spagetti & Chicken",
        image : "https://www.haddicious.com/wp-content/uploads/2020/04/Haddicious-Jollof-Spaghetti-with-Chicken-.jpg",
        price : "4000",
        desc : "grilled chicken perfect for you."
    },
    {
        food : "Steak",
        image : "https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg",
        price : "6000",
        desc : "grilled chicken perfect for you."
    },
    {
        food : "Spagetti & Chicken",
        image : "https://www.haddicious.com/wp-content/uploads/2020/04/Haddicious-Jollof-Spaghetti-with-Chicken-.jpg",
        price : "4000",
        desc : "grilled chicken perfect for you."
    },
    {
        food : "Steak",
        image : "https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg",
        price : "6000",
        desc : "grilled chicken perfect for you."
    },
    {
        food : "Spagetti & Chicken",
        image : "https://www.haddicious.com/wp-content/uploads/2020/04/Haddicious-Jollof-Spaghetti-with-Chicken-.jpg",
        price : "4000",
        desc : "grilled chicken perfect for you."
    },
    {
        food : "Steak",
        image : "https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg",
        price : "6000",
        desc : "grilled chicken perfect for you."
    },
    {
        food : "Spagetti & Chicken",
        image : "https://www.haddicious.com/wp-content/uploads/2020/04/Haddicious-Jollof-Spaghetti-with-Chicken-.jpg",
        price : "4000",
        desc : "grilled chicken perfect for you."
    },
    {
        food : "Steak",
        image : "https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg",
        price : "6000",
        desc : "grilled chicken perfect for you."
    },
    {
        food : "Chicken Pie",
        image : "https://guardian.ng/wp-content/uploads/2017/10/nigerian-plantain-and-chicken-pie-e1508087996482.jpg",
        price : "3999",
        desc : "grilled chicken perfect for you."
    },
    ]
    const [visible, setVisible] = useState(false);
    const [menu, setMenu] = useState({})

    const toggleOverlay = () => {
      setVisible(!visible);
    };

    const updateMenu = (index) => {
        setMenu(menulist[index]);
        toggleOverlay()
    }

    const keyExtractor = (item, index) =>  index.toString();

    const renderItem = ({item}) => {
       
    }
    return(
        <>
        <AddToCart visible={visible} toggleOverlay={toggleOverlay} menu={menu}/>
        <ScrollView>
            {menulist.map((item, index) => (
                <TouchableOpacity key={index.toString()} onPress={() => updateMenu(index)}>
                <View style={styles.itemContainer}>
                   <Image 
                style={styles.image}
        source={{uri : item.image}}/>
                 <View>
                     <Text style={styles.title}>{item.food}</Text>
                     <Text>{item.desc}</Text>
                 </View>
                 <Text style={styles.price}>&#8358;{item.price}</Text>   
             </View>                    
                </TouchableOpacity>

            ))}
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    itemContainer : {
        flex : 1,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-around",
        padding : 10
    },
    title : {
        fontSize : 15,
    },
    image :{ height : 100, width : 100, 
               borderTopLeftRadius : 50,
                },
    price : {
        fontSize : 20
    }
})

export default MenuList
