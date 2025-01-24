<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DivideSvelte from '../../../lib/16/solid/divide.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DivideSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Divide" />
