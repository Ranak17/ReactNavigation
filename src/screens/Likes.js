import React,{useRef} from 'react'
import { Text, View , Button, ScrollView} from 'react-native';
import Footer from './Footer';

function Likes() {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    scrollRef.current.scrollTo({ x: 0, y: 100, animated: true });
  };

  return (
    <>
      <Button title="Scroll" onPress={handleScroll} />
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        style={{ height: 200 }}
      >
        <View style={{ height: 500, backgroundColor: 'gold' }}>
          <Text>Item 1</Text>
        </View>
        <View style={{ height: 500, backgroundColor: 'blue' }}>
          <Text>Item 2</Text>
        </View>
        <View style={{ height: 50, backgroundColor: 'green' }}>
          <Text>Item 3</Text>
        </View>
      </ScrollView>
    </>
  )
}

export default Likes;
