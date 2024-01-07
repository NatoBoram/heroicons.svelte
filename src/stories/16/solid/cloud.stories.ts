import type { Meta, StoryObj } from '@storybook/svelte'
import CloudSvelte from '../../../lib/16/solid/cloud.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CloudSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CloudSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cloud: Story = {}
