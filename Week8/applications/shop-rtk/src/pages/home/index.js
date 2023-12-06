import CardSkeleton from '@/components/CardSkeleton';
import CategoryList from '@/components/CategoryList';
import ImageSlider from '@/components/ImageSlider';
import SelectMenu from '@/components/SelectMenu';
import { fetchProductByCategory } from '@/store/productSlice';
import { fetchCategories } from '@/store/categorySlice';
import {Stack} from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from './components/CardItem';


const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { categories, loadingCategories, defaultCategory } = useSelector(
    (state) => state.categories
  );
  

  const { products, loadingProducts } = useSelector((state) => state.products);

  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [sortOrder, setSortOrder] = useState('inc');

  const handleSortChange = () => {
    setSortOrder(sortOrder === 'inc' ? 'dec' : 'inc');
  };

  const sortedProducts =
    sortOrder === 'inc' ? products : [...products].reverse();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // const handleCategoryClick = (category) => {
  //   if (category !== selectedCategory) {
  //     setSelectedCategory(category);
  //     dispatch(fetchProductByCategory(category));
  //   }
  // };

  const handleCategoryClick = useCallback(
    (category) => {
      if (category !== selectedCategory) {
        setSelectedCategory(category);
        dispatch(fetchProductByCategory(category));
      }
    },
    [selectedCategory, dispatch]
  );

  useEffect(() => {
    // const defaultCategory = 'electronics';
    dispatch(fetchProductByCategory(defaultCategory));
  }, [dispatch]);

  return (
    <Stack direction="column" spacing={4}>
      <ImageSlider />
      <SelectMenu
        inputLabel="Sort"
        value={sortOrder}
        onChange={handleSortChange}
        sx={{ m: 1, minWidth: 120 }}
        options={[
          { id: 0, value: 'inc', label: 'Increment' },
          { id: 1, value: 'dec', label: 'Decrement' },
        ]}
      />
      <Stack direction="row" spacing={3}>
        <CategoryList handleCategoryClick={handleCategoryClick}/>

        <Stack
          spacing={{ xs: 1, sm: 3, md: 3 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          {loadingProducts
            ? Array.from(new Array(6)).map((item, index) => (
                <CardSkeleton key={index}/>
              ))
            : sortedProducts.map((product) => (
                <CardItem key={product.id} product={product}/>
              ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
