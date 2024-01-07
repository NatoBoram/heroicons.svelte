import type { Meta, StoryObj } from '@storybook/svelte'
import PhotoSvelte from '../../../lib/16/solid/photo.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PhotoSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PhotoSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Photo: Story = {}
