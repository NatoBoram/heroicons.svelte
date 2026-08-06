<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FlagSvelte from '../../../lib/24/outline/flag.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: FlagSvelte,
		args: { class: '' },
	})
</script>

<Story name="Flag" />
