<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ExclamationCircleSvelte from '../../../lib/16/solid/exclamation-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ExclamationCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ExclamationCircle" />
