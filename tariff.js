const tariffType = document.getElementById('tariff-type');
const fixedFields = document.getElementById('fixed-fields');
const variableFields = document.getElementById('variable-fields');

tariffType.addEventListener('change', function() {
  if (tariffType.value === 'fixed') {
    fixedFields.style.display = 'block';
    variableFields.style.display = 'none';
  } else if (tariffType.value === 'variable') {
    fixedFields.style.display = 'none';
    variableFields.style.display = 'block';
  } else {
    fixedFields.style.display = 'none';
    variableFields.style.display = 'none';
  }
});
