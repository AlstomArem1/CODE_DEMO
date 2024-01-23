@extends('admin.layout.master')

@section('content')
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Product</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Product</li>
                        </ol>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Add</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form role="form" method="post" action="{{ route('admin.updateproduct.update',['product'=> $product->id]) }}"
                                enctype="multipart/form-data">
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input name="name" type="text" value="{{ $product->name }}"
                                            class="form-control" id="name" placeholder="Enter name">
                                        @error('name')
                                            <div class="alert alert-danger">{{ $message }}</div>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label for="slug">Slug</label>
                                        <input name="slug" type="text" value="{{ $product->slug  }}"
                                            class="form-control" id="slug" placeholder="a-b-c">
                                        @error('slug')
                                            <div class="alert alert-danger">{{ $message }}</div>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label for="price">Price</label>
                                        <input name="price" type="number" value="{{ $product->price  }}"
                                            class="form-control" id="price" placeholder="123">
                                        @error('price')
                                            <div class="alert alert-danger">{{ $message }}</div>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label for="description">Description</label>
                                        {{-- <div id="description"></div> --}}
                                        <textarea  value=""
                                        placeholder="Describe yourself here..." class="form-control" name="description" id="description" >{{ $product->description }}</textarea>
                                        @error('description')
                                            <div class="alert alert-danger">{{ $message }}</div>
                                        @enderror
                                    </div>



                                    <div class="form-group">
                                        <label>Status</label>
                                        <select name="status" class="custom-select">
                                            <option value="">---Please Select---</option>
                                            <option {{ $product->status === '1' ? 'selected' : '' }} value="1">Open
                                            </option>
                                            <option {{ $product->status === '0' ? 'selected' : '' }} value="0">Close
                                            </option>
                                        </select>
                                        @error('status')
                                            <div class="alert alert-danger">{{ $message }}</div>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>placeofbirth</label>
                                        <select name="placeofbirth" class="custom-select">
                                            <option value="">---Please Select---</option>
                                            <option {{$product->placeofbirth ? 'selected' : '' }} value="DN">DN</option>

                                            <option {{$product->placeofbirth ? 'selected' : '' }} value="HN">HN</option>

                                            <option {{$product->placeofbirth ? 'selected' : '' }} value="HCM">HCM</option>
                                        </select>
                                        @error('placeofbirth')
                                            <div class="alert alert-danger">{{ $message }}</div>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Product Category</label>
                                        <select name="product_category_id" class="custom-select">
                                            <option value="">---Please Select---</option>
                                            @foreach ($productCategories as $productCategory)
                                                <option  {{ $productCategory->id === $product->product_category_id ? "selected" : "" }}  value="{{ $productCategory->id }}">{{ $productCategory->name }}
                                                </option>
                                            @endforeach
                                        </select>
                                        @error('product_category_id ')
                                            <div class="alert alert-danger">{{ $message }}</div>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label for="image">image</label>
                                        <input name="image" type="file" value="{{ $product->image }}"
                                            class="form-control" id="image" placeholder="123">
                                        @error('image')
                                            <div class="alert alert-danger">{{ $message }}</div>
                                        @enderror
                                    </div>
                                </div>
                                <!-- /.card-body -->

                                <div class="card-footer">
                                    <button type="submit" class="btn btn-primary">Update</button>
                                </div>
                                @csrf

                            </form>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
@endsection

@section('js-custom')
    <script>

        ClassicEditor
            .create(document.querySelector('#description'))
            .catch(error => {
                console.error(error);
            });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {
            $('#name').on('keyup', function() {
                var name = $('#name').val();

                $.ajax({
                    method: "POST", //method of form
                    url: "{{ route('admin.product.create.slug') }}", //action of form
                    data: {
                        'name': name,
                        '_token': '{{ csrf_token() }}'
                    },
                    success: function(response) {
                        $('#slug').val(response.slug);
                    }
                });
            });
        });
    </script>
@endsection
