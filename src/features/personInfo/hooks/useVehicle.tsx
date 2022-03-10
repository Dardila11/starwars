import { Vehicle } from "../../../interfaces/sw-vehicles";
import { useState, useEffect } from 'react';
import { swApi } from "../../../api";
import axios from "axios";

export const useVehicles = (vehicleArray: string[]) => {
  const [vehiclesInfo, setVehiclesInfo] = useState<string[]>([])
  const [isError, setIsError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchVehicles = async () => {
    setLoading(true)
    if (vehicleArray === []) {
      setLoading(false)
    } else {
      vehicleArray.forEach(element => {
        axios.get(element).then(res => {
          setVehiclesInfo(prev => [...prev, ...res.data])
        })
      })
    }
  }

  useEffect(() => {
    fetchVehicles()
  }, [vehicleArray])

  return {vehiclesInfo, isError, loading}
} 