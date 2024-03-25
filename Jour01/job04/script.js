function bissextile(year) {
    return year %400 === 0 || year %4 === 0 && year %100 !== 0;
  }

  console.log(bissextile(2020));
  console.log(bissextile(1400));
  console.log(bissextile(2000));
  console.log(bissextile(2024));