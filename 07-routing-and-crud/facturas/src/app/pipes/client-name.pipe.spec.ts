import { ClientNamePipe } from './client-name.pipe';

fdescribe('ClientNamePipe', () => {


  it('should create an instance', () => {
    const pipe = new ClientNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the name of the client in the format: APELLIDO1 APELLIDO2, Nombre', () => {
    const pipe = new ClientNamePipe();
    const result = pipe.transform(
      {
        nombre: "Nombre",
        apellidos: ["Apellido1", "Apellido2"]
      }
    );
    expect(result).toEqual("APELLIDO1 APELLIDO2, Nombre")

    const result2 = pipe.transform(
      {
        nombre: "JUANITA",
        apellidos: ["Apellido1", "Apellido2"]
      }
    );
    expect(result2).toEqual("APELLIDO1 APELLIDO2, Juanita")

    const result3 = pipe.transform(
      {
        nombre: "juanita",
        apellidos: ["APELLIDO1", "APELLIDO2"]
      }
    );
    expect(result3).toEqual("APELLIDO1 APELLIDO2, Juanita")
  });

  it('should return empty string if the client is undefined or null', () => {
    const pipe = new ClientNamePipe();
    const result = pipe.transform(undefined);
    expect(result).toEqual("");

    const result2 = pipe.transform(null);
    expect(result2).toEqual("");
  });




});
