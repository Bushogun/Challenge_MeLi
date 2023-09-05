import React, { createContext, useContext, useEffect, useState } from 'react';

export const ProductContext = createContext();
export const useProductContext = () => useContext (ProductContext)