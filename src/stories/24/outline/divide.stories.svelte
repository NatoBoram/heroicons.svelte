<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DivideSvelte from '../../../lib/24/outline/divide.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DivideSvelte,
		args: { class: '' },
	})
</script>

<Story name="Divide" />
