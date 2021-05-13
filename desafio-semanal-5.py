#Joaquin Godoy

def perimetroTrianguloRectangulo(catetoa, catetob):
    return calcularHipotenusa(catetoa, catetob) + catetoa + catetob
    
def calcularHipotenusa(catetoa, catetob):
    resultado=(catetoa**2+catetob**2)**.5
    return int(resultado)
    
def superficieTrianguloRectangulo(catetoa, catetob):
    return int((catetoa * catetob) / 2) 
    
print("Perímetro: ", perimetroTrianguloRectangulo(2,4))
print("Superficie: ", superficieTrianguloRectangulo(2,4))
print()
print("Perímetro: ", perimetroTrianguloRectangulo(4,8))
print("Superficie: ", superficieTrianguloRectangulo(4,8))
print()
print("Perímetro: ", perimetroTrianguloRectangulo(10, 12))
print("Superficie: ", superficieTrianguloRectangulo(10, 12))