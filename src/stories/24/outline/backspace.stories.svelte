<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BackspaceSvelte from '../../../lib/24/outline/backspace.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BackspaceSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Backspace" />
