import type { Meta, StoryObj } from '@storybook/svelte'
import PhotoSvelte from '../../../lib/24/outline/photo.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: PhotoSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PhotoSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Photo: Story = {}
