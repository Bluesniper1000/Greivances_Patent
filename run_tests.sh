#!/bin/bash
# Test runner script for the project

echo "=================================="
echo "Running Hostel Grievance Tests"
echo "=================================="
echo ""

# Activate virtual environment if not already active
if [ -z "$VIRTUAL_ENV" ]; then
    echo "Activating virtual environment..."
    source venv/bin/activate
fi

# Run all tests
echo "Running all tests..."
echo ""

# Test preprocessing
echo "1. Testing Preprocessing Module..."
python3 tests/test_preprocessing.py
if [ $? -eq 0 ]; then
    echo "   ✓ Preprocessing tests passed"
else
    echo "   ✗ Preprocessing tests failed"
    exit 1
fi
echo ""

# Test decision engine
echo "2. Testing Decision Engine..."
python3 tests/test_inference.py
if [ $? -eq 0 ]; then
    echo "   ✓ Decision Engine tests passed"
else
    echo "   ✗ Decision Engine tests failed"
    exit 1
fi
echo ""

# Note about model tests
echo "3. Model Tests (requires TensorFlow)..."
echo "   Note: Install TensorFlow to run model tests:"
echo "   pip install tensorflow keras numpy"
echo ""

echo "=================================="
echo "Core functionality verified! ✓"
echo "=================================="
echo ""
echo "To run individual tests:"
echo "  python3 tests/test_preprocessing.py"
echo "  python3 tests/test_inference.py"
echo ""
echo "To run all tests with pytest:"
echo "  pip install pytest"
echo "  pytest tests/ -v"
