<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Cog6ToothSvelte from '../../../lib/24/outline/cog-6-tooth.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: Cog6ToothSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Cog6Tooth" />
