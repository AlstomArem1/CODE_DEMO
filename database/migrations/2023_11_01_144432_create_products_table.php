<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name',255)->nullable();
            $table->float('price')->default(0);
            $table->text('description')->nullable();
            $table->string('placeofbirth')->nullable();
            $table->string('image',255)->nullable();
            $table->boolean('status')->default(1);
            $table->timestamps();

            $table->unsignedBigInteger('product_category_id');
            //buoi 2: tao khoa ngoai cho column do
            $table->foreign('product_category_id')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
