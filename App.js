import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const ProductCard = ({ product }) => (
  <View style={styles.card}>
    <Image 
      source={{ uri: product.image }}
      style={styles.productImage}
    />
    <View style={styles.cardContent}>
      <View style={styles.titlePriceRow}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
      </View>
      <Text style={styles.productDescription}>
        {product.description}
      </Text>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Acheter maintenant</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function App() {
  const products = [
    {
      id: 1,
      title: 'Baskets Vintage',
      price: '89,99 €',
      description: 'Description, Vintage divest comprong reiveus',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'Sneakers Retro',
      price: '75,50 €',
      description: 'Chaussures rétro confortables pour un style décontracté',
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: 'Baskets Sport',
      price: '120,00 €',
      description: 'Chaussures de sport haute performance pour les athlètes',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      title: 'Chaussures Casual',
      price: '95,75 €',
      description: 'Style décontracté parfait pour tous les jours',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: 300,
    padding: 16,
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 16,
  },
  cardContent: {
    paddingHorizontal: 0,
  },
  titlePriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginLeft: 10,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  buyButton: {
    backgroundColor: '#27ae60',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
