import type { Meta, StoryObj } from '@storybook/svelte'
import CloudSvelte from '../../../lib/24/solid/cloud.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: CloudSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CloudSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cloud: Story = {}
