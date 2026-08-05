<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShieldCheckSvelte from '../../../lib/24/outline/shield-check.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ShieldCheckSvelte,
		args: { class: '' },
	})
</script>

<Story name="ShieldCheck" />
